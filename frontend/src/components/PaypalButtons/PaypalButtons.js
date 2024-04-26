import React, { useEffect } from 'react';
import { useLoading } from '../../hooks/useLoading';
import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function Buttons({ order }) {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const createOrderandPay = async() => {
    await pay();
    clearCart();
    navigate('/orders/PAYED');
  };

  return (
   <Button text={"Make Payment"} onClick={() => createOrderandPay()}></Button>
  );
}
