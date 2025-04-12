import React, { useState, useEffect } from "react";
import api from "../../../api";
import { CardType } from "../../../screens/Box/types/card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// In CardForm.tsx
import { FiPlus, FiCheck } from "react-icons/fi";
interface CardFormProps {
  selectedCard: CardType | null;
  setSelectedCard: (card: CardType | null) => void;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  onClose: () => void;
  fetchCards: () => void;
}

const CardForm = ({ selectedCard, setSelectedCard, setCards, onClose,fetchCards }: CardFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    image: null as File | null,
    features: {
      video: false,
      meals: false,
      stay: false,
      sightseeing: false,
      medical: false,
      transport: false,
    },
    popular: false,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCard) {
      setFormData({
        title: selectedCard.title,
        location: selectedCard.location,
        image: null,
        features: {
          video: selectedCard.features?.video ?? false,
          meals: selectedCard.features?.meals ?? false,
          stay: selectedCard.features?.stay ?? false,
          sightseeing: selectedCard.features?.sightseeing ?? false,
          medical: selectedCard.features?.medical ?? false,
          transport: selectedCard.features?.transport ?? false,
        }, // Ensure fresh object reference
        popular: selectedCard.popular,
      });
      setImagePreview(selectedCard.imageUrl);
    }
  }, [selectedCard]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      features: { ...prev.features, [e.target.name]: e.target.checked },
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      image: null,
      features: {
        video: false,
        meals: false,
        stay: false,
        sightseeing: false,
        medical: false,
        transport: false,
      },
      popular: false,
    });
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const data = new FormData();
    data.append("title", formData.title);
    data.append("location", formData.location);
    
    // Append features directly instead of JSON
    Object.entries(formData.features).forEach(([key, value]) => {
      data.append(`features[${key}]`, value.toString()); 
    });
  
    data.append("popular", formData.popular ? "true" : "false");

  
    if (formData.image) {
      data.append("image", formData.image);
    }
  
    try {
      let updatedCard: CardType;
      if (selectedCard) {
        const response = await api.put<CardType>(`/cards/${selectedCard._id}`, data);
        
        updatedCard = response.data;
        setCards(prev => prev.map(card => 
          card._id === selectedCard._id ? { ...card, ...updatedCard } : card
        ));
        toast.success("Destination updated successfully!");
      } else {
        const response = await api.post<CardType>("/cards/upload", data);
        updatedCard = response.data;
        setCards(prev => [...prev, updatedCard]);
  
        toast.success("Destination created successfully!");
      }
      
      fetchCards();  // Refresh data from API
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error saving card:", error);
      toast.error("Error saving destination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCard ? "Edit Destination" : "New Destination"}
        </h2>
        <button
          type="button"
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title & Location */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.title}
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.location}
                onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {selectedCard ? "Change Image" : "Upload Image"}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                  required={!selectedCard}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer block text-gray-600 hover:text-blue-600"
                >
                  <div className="mb-2">
                    <FiPlus className="text-3xl mx-auto" />
                  </div>
                  <span className="text-sm">
                    {formData.image ? formData.image.name : "Click to upload"}
                  </span>
                </label>
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Features</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(formData.features).map(([feature, value]) => (
              <label
                key={feature}
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors ${
                  value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <input
                  type="checkbox"
                  name={feature}
                  checked={value}
                  onChange={handleFeatureChange}
                  className="hidden"
                />
                <div className={`w-5 h-5 border rounded flex items-center justify-center ${
                  value ? "bg-blue-500 border-blue-500" : "bg-white border-gray-400"
                }`}>
                  {value && <FiCheck className="text-white text-sm" />}
                </div>
                <span className="capitalize text-sm">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Popular Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <span className="text-sm font-medium text-gray-700">Mark as Popular</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.popular}
              onChange={e => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
              className="sr-only"
            />
            <div className={`w-11 h-6 rounded-full transition-colors ${
              formData.popular ? "bg-blue-500" : "bg-gray-300"
            }`}>
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform ${
                formData.popular ? "translate-x-5 bg-white" : "bg-white"
              }`} />
            </div>
          </label>
        </div>
      </div>

      {/* Form Footer */}
      <div className="p-6 border-t flex justify-end gap-4">
        <button
          type="button"
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="px-6 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {selectedCard ? "Save Changes" : "Create Destination"}
        </button>
      </div>
    </form>
  );
};

export default CardForm;
