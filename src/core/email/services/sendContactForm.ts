// Services
import emailjs from '@emailjs/browser'
// Config
import { emailPublicKey, emailServiceKey, emailTemplatelKey } from '../config'

/**
 * The main service to send emails for contact forms
 * @param node The form element
 */
export const sendContactForm = (node: HTMLFormElement) => {
  emailjs.sendForm(
    emailServiceKey,
    emailTemplatelKey,
    node,
    emailPublicKey
  ).then(() => {
    alert('Hemos recibido tu mensaje')
  }, () => {
    alert('Lo sentimos, hubo un problema al intentar enviar el mensaje')
  })
}
