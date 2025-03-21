import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer"

export const metadata: Metadata = {
	title: "Privacy Policy | SoftByte",
	description: "SoftByte is a leading agency in the software and web development space, as well as the social media and digital marketing space."
};

export default function Privacy() {
	return (
		<>
			<Nav />
			<div className="min-h-screen h-fit flex flex-col items-center py-36">
				<div className="w-5/6 lg:w-1/2">
					<h1 className="text-3xl font-bold text-center py-12">Privacy Policy</h1>
					<p className="py-2">Last updated: 03/19/2025</p>
					<div className="overview py-4">
						<p className="py-2">This Privacy Policy describes how SoftByte (the &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your personal information when you visit, use our
							services, or make a purchase from www.website.com (the &quot;Site&quot;) or otherwise communicate with us (collectively, the &quot;Services&quot;). For purposes of this
							Privacy Policy, &quot;you&quot; and &quot;your&quot; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose
							information we have collected pursuant to this Privacy Policy.</p>

						<p className="py-2">Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your
							information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.</p>

					</div>
					<div className="changes py-4">
						<h2 className="text-lg font-bold py-2">Changes to This Privacy Policy</h2>
						<p className="py-2">We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory
							reasons. We will post the revised Privacy Policy on the Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.</p>
					</div>


					<div className="personal-information py-4">
						<h2 className="text-lg font-bold py-2">How We Collect and Use Your Personal Information</h2>
						<p className="py-2">We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory
							reasons. We will post the revised Privacy Policy on the Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.</p>
						<p className="py-2">In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply
							with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our
							users or others.</p>
					</div>

					<div className="py-4">
						<h2 className="text-lg font-bold py-2">What Personal Information We Collect</h2>
						<p className="py-2">The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term
							&quot;personal information&quot;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections
							describe the categories and specific types of personal information we collect.</p>
						<p className="py-2">Information We Collect Directly from You</p>
						<p className="py-2">Information that you directly submit to us through our Services may include:</p>
						<p className="py-2">- Basic contact details including your name, address, phone number, email.<br />- Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.<br />- Account information including your username, password, security questions.<br />- Shopping information including the items you view, put in your cart or add to your wishlist.<br />- Customer support information including the information you choose to include in communications with us, for example, when sending a message
							through the Services. </p>
						<p className="py-2">Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</p>
					</div>

					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Information We Obtain Through Cookies</h2>
						<p className="py-2">We also automatically collect certain information about your interaction with the Services (&quot;Usage Data&quot;). To do this, we may use cookies, pixels and
							similar technologies (&quot;Cookies&quot;). Usage Data may include information about how you access and use our Site and your account, including device
							information, browser information, information about your network connection, your IP address and other information regarding your interaction
							with the Services.</p>
					</div>


					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Information We Obtain from Third Parties</h2>
						<p className="py-2">Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our
							behalf, such as:</p>
						<p className="py-2">- Companies who support our Site and Services, such as Shopify.<br />- Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your
							payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.<br />- When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may
							automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries,
							and cookies.</p>
						<p className="py-2">Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of
							the information provided to us by third parties and are not responsible for any third party&apos;s policies or practices. For more information, see the
							section below, Third Party Websites and Links</p>
					</div>


					<div className="py-4">
						<h2 className="text-lg font-bold py-2">How We Use Your Pernsonal Information</h2>
						<p className="py-2">- Providing Products and Services. We use your personal information to provide you with the Services in order to perform our contract with you,
							including to process your payments, fulfill your orders, to send notifications to you related to you account, purchases, returns, exchanges or other
							transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable
							you to post reviews.<br />- Marketing and Advertising. We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and
							promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using
							your personal information to better tailor the Services and advertising on our Site and other websites.<br />- Security and Fraud Prevention. We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or
							malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly
							recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been
							compromised, please contact us immediately.<br />- Communicating with you. We use your personal information to provide you with customer support and improve our Services. This is in our
							legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.</p>
					</div>

					<div className="py-4">
						<h2 className="text-lg font-bold py-2">How We Disclose Personal Information</h2>
						<p className="py-2">In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such
							circumstances may include: </p>
						<p className="py-2">- With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support,
							cloud storage, fulfillment and shipping).<br />- With business and marketing partners, including Shopify, to provide services and advertise to you. Our business and marketing partners will use your information in accordance with their own privacy notices.<br />- When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through
							your use of social media widgets or login integrations, with your consent.<br />- With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.<br />- In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to
							subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and
							the rights of our users or others.</p>
						<p className="py-2">We have, in the past 12 months disclosed the following categories of personal information and sensitive personal information (denoted by *) about
							users for the purposes set out above in &quot;How we Collect and Use your Personal Information&quot; and &quot;How we Disclose Personal Information&quot;: </p>
						<p className="py-2">Category:</p>
						<p className="py-2">- Identifiers such as basic contact details and certain order and account information<br />- Commercial information such as order information, shopping information and customer support information<br />- Internet or other similar network activity, such as Usage Data</p>
						<p className="py-2">Categories of Recipients: </p>
						<p className="py-2">- Vendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfillment partners,
							customer support partners and data analytics providers)<br />- Business and marketing partners<br />- Affiliates</p>
						<p className="py-2">We do not use or disclose sensitive personal information for the purposes of inferring characteristics about you.</p>
						<p className="py-2">Category of Personal Information</p>
						<p className="py-2">- Identifiers such as basic contact details and certain order and account information<br />- Commercial information such as records of products or services purchased and shopping information<br />- Internet or other similar network activity, such as Usage Data </p>
						<p className="py-2">Category of Recipients</p>
						<p className="py-2">- Business and marketing partners</p>
					</div>


					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Third Party Websites and Links</h2>
						<p className="py-2">Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us,
							you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or
							security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or
							semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services
							and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself,
							imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.</p>
					</div>

					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Children&apos;s Data</h2>
						<p className="py-2">The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent
							or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that
							it be deleted.</p>
						<p className="py-2">As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we &quot;share&quot; or &quot;sell&quot; (as those terms are defined in applicable law)
							personal information of individuals under 16 years of age.</p>
					</div>

					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Security and Retention of Your Information</h2>
						<p className="py-2">Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security.&quot; In addition, any information you
							send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential
							information to us.</p>
						<p className="py-2">How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to
							provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</p>
					</div>


					<div className="py-4">
						<h2 className="text-lg font-bold py-2">Your Rights and Choices</h2>
						<p className="py-2">Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are
							not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.</p>
						<p className="py-2">- Right to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways
							in which we use and share your information.<br />- Right to Delete. You may have a right to request that we delete personal information we maintain about you.<br />
							- Right to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.</p>
					</div>

				</div>
			</div>
			<Footer />
		</>
	);
}
