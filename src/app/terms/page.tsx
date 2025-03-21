import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Terms of Service | SoftByte",
	description: "SoftByte is a leading agency in the software and web development space, as well as the social media and digital marketing space."
};

export default function Terms() {
	return (
		<>
			<Nav />
			<div className="min-h-screen h-fit flex flex-col items-center py-36">
				<div className="w-5/6 lg:w-1/2">
					<h1 className="text-3xl font-bold text-center py-12">Terms of Service</h1>
					<div className="overview py-4">
						<h2 className="text-lg font-bold py-2">OVERVIEW</h2>
						<p className="py-2">This website is operated by SoftByte. Throughout the site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to SoftByte. SoftByte offers this website, including all information,
							tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
						<p className="py-2">By visiting our site and/ or purchasing something from us, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions
							(&quot;Terms of Service&quot;, &quot;Terms&quot;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These
							Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or
							contributors of content.
							Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound
							by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any
							Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
						<p className="py-2">Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version
							of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting
							updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the
							website following the posting of any changes constitutes acceptance of those changes.
							Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.</p>
					</div>

					<div className="store-terms py-4">
						<h2 className="text-lg font-bold py-2">ONLINE STORE TERMS</h2>
						<p className="py-2">By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are
							the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
						<p className="py-2">You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction
							(including but not limited to copyright laws)</p>
						<p className="py-2">You must not transmit any worms or viruses or any code of a destructive nature.</p>
						<p className="py-2">A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
					</div>
					<div className="general-conditions py-4">
						<h2 className="text-lg font-bold py-2">GENERAL CONDITIONS</h2>
						<p className="py-2">We reserve the right to refuse service to anyone for any reason at any time.</p>
						<p className="py-2">You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various
							networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always
							encrypted during transfer over networks.</p>
						<p className="py-2">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact
							on the website through which the service is provided, without express written permission by us.</p>
						<p className="py-2">The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
					</div>
					<div className="accuracy py-4">
						<h2 className="text-lg font-bold py-2">ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
						<p className="py-2">We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general
							information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more
							complete or more timely sources of information. Any reliance on the material on this site is at your own risk</p>
						<p className="py-2">This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We
							reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
					</div>
					<div className="modifications py-4">
						<h2 className="text-lg font-bold py-2">MODIFICATIONS TO THE SERVICE AND PRICES</h2>
						<p className="py-2">Prices for our products are subject to change without notice.</p>
						<p className="py-2">We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
						<p className="py-2">We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
					</div>
					<div className="products-services py-4">
						<h2 className="text-lg font-bold py-2">PRODUCTS OR SERVICES (if applicable)</h2>
						<p className="py-2">We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee
							that your computer monitor&apos;s display of any color will be accurate.
							We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may
							exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of
							products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any
							product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
						<p className="py-2">We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your
							expectations, or that any errors in the Service will be corrected</p>
					</div>

					<div className="feedback py-4">
						<h2 className="text-lg font-bold py-2">USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</h2>
						<p className="py-2">If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas,
							suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, &apos;comments&apos;), you agree that we
							may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
							We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to
							any comments.</p>
						<p className="py-2">We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening,
							libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
							You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or
							proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any
							computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail
							address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely
							responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any
							third-party.</p>
					</div>

					<div className="personal-info py-4">
						<h2 className="text-lg font-bold py-2">PERSONAL INFORMATION</h2>
						<p className="py-2">Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy, please see <a href="/privacy" className="underline font-medium">our privacy policy</a></p>
					</div>

					<div className="inaccuracies py-4">
						<h2 className="text-lg font-bold py-2">ERRORS, INACCURACIES AND OMISSIONS</h2>
						<p className="py-2">Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to
							product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors,
							inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is
							inaccurate at any time without prior notice (including after you have submitted your order).</p>
						<p className="py-2">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing
							information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to
							indicate that all information in the Service or on any related website has been modified or updated</p>
					</div>


					<div className="prohibited py-4">
						<h2 className="text-lg font-bold py-2">PROHIBITED USES</h2>
						<p className="py-2">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:
							(a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or
							state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of
							others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion,
							ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information;
							(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation
							of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish,
							pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the
							Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for
							violating any of the prohibited uses.</p>
					</div>


					<div className="limited-liability py-4">
						<h2 className="text-lg font-bold py-2">DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
						<p className="py-2">We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
						<p className="py-2">We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
						<p className="py-2">You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
							You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to you
							through the service are (except as expressly stated by us) provided &apos;as is&apos; and &apos;as available&apos; for your use, without any representation, warranties or
							conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a
							particular purpose, durability, title, and non-infringement.
							In no case shall SoftByte, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any
							injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits,
							lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict
							liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way
							to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if
							advised of their possibility.
							Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or
							jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
					</div>


					<div className="indemnification py-4">
						<h2 className="text-lg font-bold py-2">INDEMNIFICATION</h2>
						<p className="py-2">You agree to indemnify, defend and hold harmless SoftByte and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors,
							licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’
							fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your
							violation of any law or the rights of a third-party.</p>
						<p className="py-2">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing
							information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to
							indicate that all information in the Service or on any related website has been modified or updated</p>
					</div>


					<div className="severability py-4">
						<h2 className="text-lg font-bold py-2">SEVERABILITY</h2>
						<p className="py-2">In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be
							enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of
							Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
					</div>

				</div>
			</div>
			<Footer />
		</>
	);
}
