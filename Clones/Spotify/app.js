const songs = [
    {
        id: '1',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        duration: 354,
        cover: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
        id: '2',
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        album: 'Led Zeppelin IV',
        duration: 482,
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
        id: '3',
        title: 'Hotel California',
        artist: 'Eagles',
        album: 'Hotel California',
        duration: 391,
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
];

class Player {
    constructor() {
        this.audioPlayer = document.getElementById('audio-player');
        this.playButton = document.getElementById('play-button');
        this.prevButton = document.getElementById('prev-button');
        this.nextButton = document.getElementById('next-button');
        this.volumeSlider = document.getElementById('volume-slider');
        this.progress = document.getElementById('progress');
        this.currentTimeEl = document.getElementById('current-time');
        this.durationEl = document.getElementById('duration');
        this.currentSongCover = document.getElementById('current-song-cover');
        this.currentSongTitle = document.getElementById('current-song-title');
        this.currentSongArtist = document.getElementById('current-song-artist');

        this.currentSongIndex = parseInt(localStorage.getItem('currentSongIndex')) || 0;
        this.isPlaying = false;

        this.initializeEventListeners();
        this.loadSong(songs[this.currentSongIndex]);

        // Restore playback position
        const savedTime = parseFloat(localStorage.getItem('currentTime'));
        if (savedTime) this.audioPlayer.currentTime = savedTime;
    }

    initializeEventListeners() {
        this.playButton.addEventListener('click', () => this.togglePlay());
        this.prevButton.addEventListener('click', () => this.playPrevious());
        this.nextButton.addEventListener('click', () => this.playNext());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        this.audioPlayer.addEventListener('timeupdate', () => this.updateProgress());
        this.audioPlayer.addEventListener('ended', () => this.playNext());
        this.audioPlayer.addEventListener('error', () => alert('Error playing the audio.'));
        window.addEventListener('beforeunload', () => this.saveState());
    }

    saveState() {
        localStorage.setItem('currentSongIndex', this.currentSongIndex);
        localStorage.setItem('currentTime', this.audioPlayer.currentTime);
    }

    loadSong(song) {
        this.audioPlayer.src = song.url;
        this.currentSongCover.src = song.cover;
        this.currentSongTitle.textContent = song.title;
        this.currentSongArtist.textContent = song.artist;
        this.currentSongCover.classList.remove('hidden');
    }

    togglePlay() {
        this.isPlaying ? this.pause() : this.play();
    }

    play() {
        this.isPlaying = true;
        this.audioPlayer.play();
        this.playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
    }

    pause() {
        this.isPlaying = false;
        this.audioPlayer.pause();
        this.playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    }

    playNext() {
        this.currentSongIndex = (this.currentSongIndex + 1) % songs.length;
        this.loadSong(songs[this.currentSongIndex]);
        this.play();
    }

    playPrevious() {
        this.currentSongIndex = (this.currentSongIndex - 1 + songs.length) % songs.length;
        this.loadSong(songs[this.currentSongIndex]);
        this.play();
    }

    setVolume(value) {
        this.audioPlayer.volume = value;
    }

    updateProgress() {
        const { currentTime, duration } = this.audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        this.progress.style.width = `${progressPercent}%`;
        this.currentTimeEl.textContent = this.formatTime(currentTime);
        this.durationEl.textContent = this.formatTime(duration);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    playSong(index) {
        this.currentSongIndex = index;
        this.loadSong(songs[this.currentSongIndex]);
        this.play();
    }
}

class SongList {
    constructor(player) {
        this.player = player;
        this.songsListElement = document.getElementById('songs-list');
        this.renderSongs();
    }

    renderSongs() {
        this.songsListElement.innerHTML = songs.map((song, index) => `
            <tr onclick="songList.onSongClick(${index})">
                <td>${index + 1}</td>
                <td>
                    <div class="song-row">
                        <img src="${song.cover}" alt="${song.title}" class="song-cover" loading="lazy">
                        <div class="song-details">
                            <span class="song-title">${song.title}</span>
                            <span class="song-artist">${song.artist}</span>
                        </div>
                    </div>
                </td>
                <td>${song.album}</td>
                <td>${this.formatDuration(song.duration)}</td>
            </tr>
        `).join('');
    }

    formatDuration(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    onSongClick(index) {
        this.player.playSong(index);
    }
}

const player = new Player();
const songList = new SongList(player);
