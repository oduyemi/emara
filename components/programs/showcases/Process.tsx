export const ShowcaseProcess = () => {
    const steps = [
      {
        title: "Supplier selection",
        description:
          "Export-ready suppliers are selected based on product quality and market demand."
      },
      {
        title: "Product preparation",
        description:
          "Suppliers prepare samples, branding materials, and export documentation."
      },
      {
        title: "International showcase",
        description:
          "Products are displayed at curated events attended by buyers and distributors."
      },
      {
        title: "Buyer engagement",
        description:
          "Interested buyers connect with suppliers for potential partnerships."
      }
    ];
  
    return (
      <section className="py-28 px-6 bg-[#F7F9FC]">
  
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#0F233F]">
              How International Showcases Work
            </h2>
          </div>
  
          <div className="grid md:grid-cols-4 gap-8">
  
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="text-accent font-semibold mb-3">
                  {`0${i + 1}`}
                </div>
  
                <h3 className="font-semibold text-[#0F233F] mb-2">
                  {step.title}
                </h3>
  
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  };