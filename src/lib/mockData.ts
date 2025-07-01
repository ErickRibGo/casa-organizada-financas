// Mock data for financial family management system

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface FamilyMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  type: 'income' | 'expense';
}

export interface Transaction {
  id: string;
  memberId: string;
  categoryId: string;
  amount: number;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  id: string;
  categoryId: string;
  amount: number;
  month: string;
  spent: number;
}

// Mock current user
export const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@familia.com',
  role: 'admin'
};

// Mock family members
export const mockFamilyMembers: FamilyMember[] = [
  {
    id: '1',
    name: 'João Silva',
    role: 'Pai',
    isActive: true
  },
  {
    id: '2',
    name: 'Maria Silva',
    role: 'Mãe',
    isActive: true
  },
  {
    id: '3',
    name: 'Pedro Silva',
    role: 'Filho',
    isActive: true
  }
];

// Mock categories
export const mockCategories: Category[] = [
  // Income categories
  { id: '1', name: 'Salário', color: '#10B981', icon: '💰', type: 'income' },
  { id: '2', name: 'Freelance', color: '#059669', icon: '💻', type: 'income' },
  { id: '3', name: 'Investimentos', color: '#047857', icon: '📈', type: 'income' },
  
  // Expense categories
  { id: '4', name: 'Alimentação', color: '#EF4444', icon: '🍽️', type: 'expense' },
  { id: '5', name: 'Moradia', color: '#DC2626', icon: '🏠', type: 'expense' },
  { id: '6', name: 'Transporte', color: '#B91C1C', icon: '🚗', type: 'expense' },
  { id: '7', name: 'Lazer', color: '#991B1B', icon: '🎮', type: 'expense' },
  { id: '8', name: 'Educação', color: '#7C2D12', icon: '📚', type: 'expense' },
  { id: '9', name: 'Saúde', color: '#92400E', icon: '⚕️', type: 'expense' },
];

// Mock transactions
export const mockTransactions: Transaction[] = [
  // João's transactions
  { id: '1', memberId: '1', categoryId: '1', amount: 5000, description: 'Salário Mensal', date: '2024-01-01', type: 'income' },
  { id: '2', memberId: '1', categoryId: '5', amount: -1200, description: 'Aluguel', date: '2024-01-05', type: 'expense' },
  { id: '3', memberId: '1', categoryId: '4', amount: -150, description: 'Supermercado', date: '2024-01-10', type: 'expense' },
  
  // Maria's transactions
  { id: '4', memberId: '2', categoryId: '2', amount: 800, description: 'Projeto Freelance', date: '2024-01-15', type: 'income' },
  { id: '5', memberId: '2', categoryId: '4', amount: -200, description: 'Mercado', date: '2024-01-12', type: 'expense' },
  { id: '6', memberId: '2', categoryId: '9', amount: -180, description: 'Consulta Médica', date: '2024-01-18', type: 'expense' },
  
  // Pedro's transactions
  { id: '7', memberId: '3', categoryId: '7', amount: -50, description: 'Cinema', date: '2024-01-20', type: 'expense' },
  { id: '8', memberId: '3', categoryId: '8', amount: -300, description: 'Material Escolar', date: '2024-01-08', type: 'expense' },
];

// Mock budgets
export const mockBudgets: Budget[] = [
  { id: '1', categoryId: '4', amount: 800, month: '2024-01', spent: 350 },
  { id: '2', categoryId: '5', amount: 1200, month: '2024-01', spent: 1200 },
  { id: '3', categoryId: '6', amount: 400, month: '2024-01', spent: 320 },
  { id: '4', categoryId: '7', amount: 300, month: '2024-01', spent: 50 },
  { id: '5', categoryId: '8', amount: 500, month: '2024-01', spent: 300 },
  { id: '6', categoryId: '9', amount: 300, month: '2024-01', spent: 180 },
];

// Helper functions
export const getCategoryById = (id: string) => mockCategories.find(cat => cat.id === id);
export const getMemberById = (id: string) => mockFamilyMembers.find(member => member.id === id);

export const getTransactionsByMember = (memberId: string) => 
  mockTransactions.filter(transaction => transaction.memberId === memberId);

export const getIncomeByMember = (memberId: string) => 
  mockTransactions
    .filter(t => t.memberId === memberId && t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

export const getExpensesByMember = (memberId: string) => 
  mockTransactions
    .filter(t => t.memberId === memberId && t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

export const getTotalIncome = () => 
  mockTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

export const getTotalExpenses = () => 
  mockTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);