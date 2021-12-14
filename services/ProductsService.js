import axios from 'axios';
const baseUrl = 'https://ecommerce-residencia.herokuapp.com';

export async function getProducts() {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/produto`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}

export async function getProduct(id) {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/produto/${id}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}
