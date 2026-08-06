interface PrivacyPolicyDetails {
   id: number;
   title: string;
   description: string;
   date: string;
}

const PrivacyPolicy: PrivacyPolicyDetails[] = [
	{
		id: 1,
		title: 'information we collect',
		description: `We may collect personal information that you provide directly to us, such as your name, email address, and contact details when you interact with our website.
				We automatically collect certain information about your device and usage patterns when you visit our website, including your IP address, browser type, pages visited,
				and referring URL.`,
		date: '20 MAY 2022',
	},
	{
		id: 2,
		title: 'How we use your information',
		description: `We use the collected information for various purposes, including.
				We automatically collect certain information about your device and usage patterns when you visit our website, including your IP address, browser type, pages visited, and referring URL.
				Providing and improving our services.
				Responding to your queries and requests.
				Sending your promotional and informational content.
				Analyzing and improving the effectiveness of our website.`,
		date: '20 MAY 2022',
	},
	{
		id: 3,
		title: 'data sharing and disclosure',
		description: `We may share your personal data with third party libraries in the following circumstances.
			With service providers who assist us in operating and managing our website.
			With affiliated partners for marketing and promotional purposes.
			When required by law or to protect our rights and interests.`,
		date: '20 MAY 2022',	
	},
	{
		id: 4,
		title: 'cookies',
		description: `Our websites uses cookies and similar technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser 
				settings.`,
		date: '20 MAY 2022',
	},
	{
		id: 5,
		title: 'your rights',
		description: `You have certain rights regarding your personal data, including the right to access, correct, delete, or withdraw your consent. You can exercise these rights by 
				contacting us at Contact Us page.`,
		date: '20 MAY 2022',
	},
	{
		id: 6,
		title: 'data security',
		description: `We implement appropriate security measures to protect your personal data from unauthorized access and disclosure. However, no data transmission over the internet can be 
				guaranteed to be completely secure.`,
		date: '20 MAY 2022',
	},
	{
		id: 7,
		title: `children's privacy`,
		description: `Our website is not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you beleive we have collected information 
				from a child, please contact us to have it removed.`,
		date: '20 MAY 2022',
	},
	{
		id: 8,
		title: 'changes to this policy',
		description: `We may update this privacy policy to reflect changes in our practices or legal requirements. We will post the updated policy on this page and revise the last updated
				date accordingly.`,
		date: '20 MAY 2022',
	},
	{
		id: 9,
		title: 'contact us',
		description: `if you have any questions about our privacy policy or the handling of your personal data, please contact  us at Contact Us page.`,
		date: '20 MAY 2022',		
	}
]

export default PrivacyPolicy;