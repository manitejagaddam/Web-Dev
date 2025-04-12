const express = require('express');
const supabase = require('../config/supabase');

const router = express.Router();

// Get current user profile
router.get('/profile', async (req, res) => {
  try {
    const userId = req.user.id;

    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, first_name, last_name, created_at')
      .eq('id', userId)
      .single();

    if (error) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.created_at
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName } = req.body;

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({ 
        first_name: firstName, 
        last_name: lastName 
      })
      .eq('id', userId)
      .select();

    if (error) {
      return res.status(400).json({ message: 'Error updating profile', error });
    }

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser[0].id,
        email: updatedUser[0].email,
        firstName: updatedUser[0].first_name,
        lastName: updatedUser[0].last_name
      }
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;