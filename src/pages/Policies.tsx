import { Layout } from "@/components/Layout";

const policies = [
  {
    title: "Health & Safety Policy",
    content: [
      "TrecomHvac & Mechanical is committed to ensuring the health, safety, and welfare of all employees, subcontractors, clients, and members of the public who may be affected by our work.",
      "We maintain comprehensive health and safety procedures that comply with current legislation and industry best practice. All team members receive regular training and are expected to work safely at all times.",
      "Risk assessments and method statements are prepared for all projects, and we actively promote a culture where safety concerns can be raised and addressed promptly.",
    ],
  },
  {
    title: "Environmental Policy",
    content: [
      "We recognise our responsibility to minimise the environmental impact of our operations and are committed to continuous improvement in our environmental performance.",
      "Key commitments include the proper handling and disposal of refrigerants in accordance with F-Gas regulations, minimising waste through careful planning and recycling where possible, and selecting energy-efficient equipment and materials.",
      "We encourage sustainable practices across our supply chain and work with clients to implement environmentally responsible solutions.",
    ],
  },
  {
    title: "Quality Assurance",
    content: [
      "Quality is fundamental to everything we do at TrecomHvac & Mechanical. We maintain rigorous quality control procedures throughout all stages of our work.",
      "All installations are carried out in accordance with manufacturer specifications, relevant British Standards, and Building Regulations. We ensure all work is properly tested, commissioned, and documented.",
      "We welcome client feedback and use it to drive continuous improvement in our services.",
    ],
  },
  {
    title: "Equal Opportunities",
    content: [
      "TrecomHvac & Mechanical is an equal opportunities employer. We are committed to creating an inclusive working environment where everyone is treated with dignity and respect.",
      "We do not discriminate on the grounds of age, disability, gender, race, religion, or sexual orientation. Employment decisions are based solely on skills, qualifications, and merit.",
    ],
  },
  {
    title: "Data Protection",
    content: [
      "We are committed to protecting the privacy and security of personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
      "Personal data is collected and processed only for legitimate business purposes, kept secure, and retained only for as long as necessary. Individuals have the right to access their personal data and request correction or deletion.",
      "For any data protection queries, please contact us using the details on our Contact page.",
    ],
  },
];

export default function Policies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Policies
            </p>
            <h1 className="mb-6">
              Corporate Policies & Commitments
            </h1>
            <p className="text-lg text-muted-foreground">
              We maintain clear policies that guide our operations and demonstrate 
              our commitment to professional, responsible business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="space-y-12">
              {policies.map((policy) => (
                <div key={policy.title} className="border-b border-border pb-12 last:border-0">
                  <h2 className="text-2xl font-semibold mb-6">{policy.title}</h2>
                  <div className="space-y-4">
                    {policy.content.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Documents */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Full Policy Documents</h2>
            <p className="text-muted-foreground">
              Full copies of our policy documents are available on request. 
              Please contact us if you require detailed policy documentation 
              for tender or compliance purposes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
