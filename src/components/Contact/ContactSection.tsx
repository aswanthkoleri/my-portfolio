import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">I'd love to have a conversation</h4>
          <p className="text-neutral mt-8">
            I'm always looking for new challenges and opportunities to grow.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:johndoe@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> aswanth.koleri.anil@gmail.com
          </a>
          <a
            href="tel:+91 8075153249"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +91 8075153249
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
