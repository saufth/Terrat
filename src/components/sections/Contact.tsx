// React
import { FormEvent, useRef } from 'react'
// Services
import { sendContactForm } from '../../core/email/services/sendContactForm'
// Styles
import styles from '../../styles/sections/Contact.module.css'

/**
* The contact section of application
* @returns The Contact section component
*/
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const node = formRef.current
    node && sendContactForm(node)
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          ¿Problemas con los números?
        </h1>
        <p className={styles.description}>
          Pongamosnos en contacto
        </p>
      </div>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
        ref={formRef}
      >
        <div>
          <input
            className={styles.input}
            type='text'
            name='contact_name'
            id='contact_name'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div>
          <input
            className={styles.input}
            type='email'
            name='contact_email'
            id='contact_email'
            placeholder='Tu Email'
            required
          />
        </div>
        <div>
          <textarea
            className={styles.input}
            name='contact_description'
            id='contact_description'
            rows={1}
            placeholder='Cuentanos sobre tu proyecto'
            defaultValue=''
            required
          />
        </div>
        <div className={styles.options}>
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
