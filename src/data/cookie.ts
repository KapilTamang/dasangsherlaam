interface CookiePolicyDetails {
   id: number;
   title: string;
   description: string;
   date: string;
}

const CookiePolicy: CookiePolicyDetails[] = [
	{
		id: 1,
		title: 'what are cookies?',
		description: `Cookies are small pieces of data stored on your device (computer or mobile devices) when you visit a website. They are widely used to make websites work efficiently and provide a better browsing exprience.`,
		date: '20 MAY 2022',
	},
	{
		id: 2,
		title: 'types of cookies we use',
		description: `Essential cookies are necessary for the website to function properly. They enable basic features such as page navigation, accessing secure areas, and providing services like shopping carts.
				Functional cookies allow the website to remember your preferences, such as language settings and font size, to provide you with a more personalized experience.
				Performance cookies help us to understand how visitors use our website by collecting information about the pages they visit and any errors encountered. This data helps us improve our website's performance.
				Targeting or advertising cookies to deliver relevant advertisement to you based on your interests and browsing behavior. They also help us measure the effectiveness of our advertising campaigns.`,
		date: '20 JUN 2022',
	},
	{
		id: 3,
		title: 'third party cookies',
		description: `We may also allow third-party cookies service providers to use cookies on our website. These cookies enable them to gather information about your browsing habits across different websites, which they may use for advertising and analytics purposes.`,
        date: '20 MAY 2024',
    },
	{
		id: 4,
		title: 'managing cookies',
		description: `Most web browsers allow you to manage your cookie preferences. You can usually set your browser to block or delete cookies. Keep in mind that if you choose to disable cookies, some parts of our website may not function properly.`,
		date: '20 MAY 2022',
	},
	{
		id: 5,
		title: 'your consent',
		description: `By using our website, you consent to the use of cookies as described in the Cookie Policy. You also agree to our Privacy Policy.`,
		date: '20 MAY 2022',
	},
	{
		id: 6,
		title: 'updates to this policy',
		description: `We may update this Cookie Policy from time to time to reflect changes in technology or legal agreements. Any updates will be posted on this page, and the last updated date will be revised accordingly.`,
		date: '20 MAY 2022',
	},
	{
		id: 7,
		title: 'contact us',
		description: `If you have any questions about our Cookie Policy or use of cookies, please contact us at Conatact Us Page.`,
		date: '20 MAY 2022',	
	}
]

export default CookiePolicy;