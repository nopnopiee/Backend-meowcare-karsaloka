import express from 'express';
import { getCustomer, insertCustomer, updateCustomer, deleteCustomer, getCustomerById, getCustomerTest } from '../controller/customer.controller.js'

const router = express.Router();

router.get('/customer', getCustomer);
router.post('/customer', insertCustomer);
router.put('/customer/:id_customer', updateCustomer);
router.delete('/customer/:id_customer', deleteCustomer);
router.get('/customer/:id_customer', getCustomerById);
router.get('/customer/test', getCustomerTest);  // Route baru untuk getCustomerTest

export default router;
