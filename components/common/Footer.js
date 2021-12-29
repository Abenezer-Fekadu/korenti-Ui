import SocialIcon from './SocialIcon'

function Footer() {
    return (

        <div className='container pt-8 pb-12 text-xs text-gray-400 space-y-5'>

            {/* First row (logo and social icons) */}
            <div className="flex justify-between">
                <img src="/images/logo.png" alt="logo" className="h-7" />
                <div className="flex space-x-5">
                    <SocialIcon name="facebook" />
                    <SocialIcon name="twitter" />
                    <SocialIcon name="youtube" />
                    <SocialIcon name="linkedin" />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex space-x-5">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal</a>
                </div>
                <div className="flex space-x-5">
                    <p>&copy; 2021 Korenti Craft Technologies</p>
                </div>
            </div>

        </div>

    )
}

export default Footer
