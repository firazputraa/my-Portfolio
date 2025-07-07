import InstagramIcon from '../atoms/InstagramIcon';
import LinkedinIcon from '../atoms/LinkedInIcon';
import XIcon from '../atoms/XIcon';
import FacebookIcon from '../atoms/FacebookIcon';
import WhatsappIcon from '../atoms/WhatsappIcon';

const ContainerIcons = () => {
  return (
        <div className='flex flex-row justify-center items-center gap-2.5'>
          <a href="https://linkedin.com/in/muhammad-firaz-putra-sri-ardhya" target='_blank' rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <LinkedinIcon className="text-white hover:text-sky-200 hover:scale-95 w-8 h-8"/>
          </a>
          <a href="https://instagram.com/firazputraa" target='_blank' rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <InstagramIcon className="text-white hover:text-sky-200 w-8 h-8 hover:scale-95"/>
          </a>
          <a href="https://x.com/firazputraa" target='_blank' rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <XIcon className="text-white hover:text-sky-200 w-8 h-8 hover:scale-95"/>
          </a>
          <a href="https://facebook.com/firazputraa.firazputraa" target='_blank' rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <FacebookIcon className="text-white hover:text-sky-200 w-8 h-8 hover:scale-95"/>
          </a>
          <a href="https://wa.me/+6289520276895" target='_blank' rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <WhatsappIcon className="text-white hover:text-sky-200 w-8 h-8 hover:scale-95"/>
          </a>
        </div>
  )
}

export default ContainerIcons;