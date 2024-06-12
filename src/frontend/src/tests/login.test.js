import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import usuarioService from '../services/userService';
import { useNavigate } from 'react-router-dom';

// Mock do hook useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock do serviço usuarioService
jest.mock('../services/userService', () => ({
  criarUsuario: jest.fn(),
}));

describe('LoginPage Component', () => {
  let wrapper;
  const mockNavigate = jest.fn();
  const mockCriarUsuario = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    usuarioService.criarUsuario.mockImplementation(mockCriarUsuario);
    wrapper = shallow(<LoginPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('handles login form submission and redirects to /home on successful login', async () => {
    mockCriarUsuario.mockResolvedValueOnce({ name: 'John Doe' });
    const email = 'test@example.com';
    const password = 'password123';
    wrapper.find('#email').simulate('change', { target: { value: email } });
    wrapper.find('#password').simulate('change', { target: { value: password } });
    await wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(mockCriarUsuario).toHaveBeenCalledWith({ email, password, job: 'lider' });
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  it('displays error message when login fails', async () => {
    mockCriarUsuario.mockRejectedValueOnce({ response: { status: 401 } });
    const email = 'test@example.com';
    const password = 'password123';
    wrapper.find('#email').simulate('change', { target: { value: email } });
    wrapper.find('#password').simulate('change', { target: { value: password } });
    await wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(mockCriarUsuario).toHaveBeenCalledWith({ email, password, job: 'lider' });
    expect(wrapper.find('ErrorMessage').text()).toBe('Usuário não encontrado');
  });
});
