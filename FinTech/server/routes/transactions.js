const express = require('express');
const supabase = require('../config/supabase');

const router = express.Router();

// Get all transactions for the current user
router.get('/', async (req, res) => {
  try {
    const userId = req.user.id;
    
    const { data: transactions, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false });

    if (error) {
      return res.status(400).json({ message: 'Error fetching transactions', error });
    }

    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get a specific transaction
router.get('/:id', async (req, res) => {
  try {
    const userId = req.user.id;
    const transactionId = req.params.id;
    
    const { data: transaction, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', transactionId)
      .eq('user_id', userId)
      .single();

    if (error) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    console.error('Error fetching transaction:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Create a new transaction
router.post('/', async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount, description, category, type, date } = req.body;
    
    if (!amount || !description || !category || !type) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const { data: newTransaction, error } = await supabase
      .from('transactions')
      .insert([
        { 
          user_id: userId,
          amount,
          description,
          category,
          type,
          date: date || new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      return res.status(400).json({ message: 'Error creating transaction', error });
    }

    res.status(201).json(newTransaction[0]);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Update a transaction
router.put('/:id', async (req, res) => {
  try {
    const userId = req.user.id;
    const transactionId = req.params.id;
    const { amount, description, category, type, date } = req.body;
    
    // First check if the transaction belongs to the user
    const { data: existingTransaction } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', transactionId)
      .eq('user_id', userId)
      .single();
      
    if (!existingTransaction) {
      return res.status(404).json({ message: 'Transaction not found or unauthorized' });
    }

    const { data: updatedTransaction, error } = await supabase
      .from('transactions')
      .update({ 
        amount,
        description,
        category,
        type,
        date
      })
      .eq('id', transactionId)
      .eq('user_id', userId)
      .select();

    if (error) {
      return res.status(400).json({ message: 'Error updating transaction', error });
    }

    res.json(updatedTransaction[0]);
  } catch (error) {
    console.error('Error updating transaction:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.user.id;
    const transactionId = req.params.id;
    
    // First check if the transaction belongs to the user
    const { data: existingTransaction } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', transactionId)
      .eq('user_id', userId)
      .single();
      
    if (!existingTransaction) {
      return res.status(404).json({ message: 'Transaction not found or unauthorized' });
    }

    const { error } = await supabase
      .from('transactions')
      .delete()
      .eq('id', transactionId)
      .eq('user_id', userId);

    if (error) {
      return res.status(400).json({ message: 'Error deleting transaction', error });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;