import { toast } from "react-toastify"

export function checkCpf(cpf) {
	if(!cpf) return false
	cpf = cpf.replace(".", "").replace(".", "").replace("-", "")

	const validateCpf = cpf

	const invalidsCpfs = [
		'00000000000', 
		'11111111111', 
		'22222222222', 
		'33333333333', 
		'44444444444',
		'55555555555',
		'66666666666',
		'77777777777',
		'88888888888',
		'99999999999'
	]

	if(invalidsCpfs.includes(validateCpf)) return false
	return true
}

export async function validatePhone(_, value) {

	const invalidsPhones = [
		'(00) 00000-0000', 
		'(11) 11111-1111', 
		'(22) 22222-2222', 
		'(33) 33333-3333', 
		'(44) 44444-4444',
		'(55) 55555-5555',
		'(66) 66666-6666',
		'(77) 77777-7777',
		'(88) 88888-8888',
		'(99) 99999-9999'
	]

	if(!value) {
		return Promise.reject('Insira um número de celular')
	}

	const validate = invalidsPhones.includes(value)

	if(validate) {
		toast.error('Número de celular inválido', 2)
		return Promise.reject()
	}
}

export async function validateEmail(_, value) {
  if(!value) {
    return Promise.reject('Insira um e-mail')
  }
  const validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  if(!validate) {
		toast.error('E-mail inválido', 2)
    return Promise.reject()
  }
}

export function validateName(event) {
  const regex = event.target.value.replace(/[0-9]/g, '')
  event.target.value = regex
}