interface Item {
    point: string;
}

interface TermsAndConditionsDetails {
    id: number;
    title:string;
    description: string;
    bullets: Item[]
}

const TC: TermsAndConditionsDetails[] = [
    {
        id: 1,
        title: 'use of the website',
        description: `You may use this website for lawful purpose only. You agree not to use the website
        in any way that`,
        bullets: [
            {
                point: 'Violates any applicable local, national or international law.'
            },
            {
                point: 'Infringes upon the rights of others.'
            },
            {
                point: 'Attempts to gain unauthorized access to our website, servers, or systems.'
            },
            {
                point: 'Introduces viruses, malware, or other harmful material.'
            },
            {
                point: 'Interferes with the normal operaion or security of the website.'
            }
        ]
    },
    {
        id: 2,
        title: 'intellectual property',
        description: `Unless otherwise stated, all contents published on this website, including articles, text, graphics, logos, images, designs 
        , and other materials, is owned by or licensed to wwww.dasangsherlaam.com`,
        bullets: []
    },
    {
        id: 3,
        title: 'user submitted content',
        description: `if you submit comments, feedback, articles, images, or other materrials to our website, you are responsible for ensuring that you have the right
        to submit that content.
        By submitting content, you grant us premission to use, reproduce, publish and display it in our website and related platforms. We reserve the right to remove 
        content that we consider inappropriate, unlawful, offensive, or otherwise inconsistent with these terms.`,
        bullets: []
    },
    {
        id: 4,
        title: 'accuracy of information',
        description: `We make reasonable efforts to provide accurate, up-to-date information.However, we do not guarantee that all informations on the website in complete
        ,accurate, reliable, or current.
        The content provided on this website is for general information purposes and should not be considered professional, legal, financial, medical, or otehr specialized advice 
        unless specifically stated otherwise.`,
        bullets: []
    },
    {
        id: 5,
        title: 'external links',
        description: `Our website may contain links to third-party websites or services. These links are provided for convenience and informational purposes.

        We do not control or necessarily endorse third-party websites and are not responsible for their content, availability, privacy practices, or terms and conditions.`,
        bullets: []
    },
    {
        id: 6,
        title: 'disclaimer',
        description: `Your use of this website is at your own risk. The website and its content are provided on an "as is" and "as available" basis, without warranties of any kind to the extent permitted by applicable law.

        We do not guarantee that the website will always be available, secure, error-free, or free from viruses or other harmful components.`,
        bullets: []
    },
    {
        id: 7,
        title: 'limitation of liability',
        description: `To the maximum extent permitted by applicable law, [Website Name] and its owners, authors, contributors, and affiliates will not be liable for any direct, indirect, incidental, consequential,
        or other losses arising from your use of, or inability to use, the website or its content.`,
        bullets: []
    },
    {
        id: 8,
        title: 'privacy',
        description: `Your use of this website may also be subject to our Privacy Policy, which explains how we collect, use, and protect information.`,
        bullets: []
    },
    {
        id: 9,
        title: 'changes to these terms',
        description: `We may update or modify these Terms and Conditions from time to time. Any changes will be posted on this page with an updated "Last updated" date.

        Your continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
        bullets: []
    },
    {
        id: 10,
        title: 'termination',
        description: `We reserve the right to restrict or terminate access to the website, without prior notice, if we believe that a user has violated these Terms and Conditions or applicable law.`,
        bullets: []
    },
    {
        id: 11,
        title: 'contact us',
        description: `If you have questions about these Terms and Conditions, please contact us:`,
        bullets: []
    }
]

export default TC;