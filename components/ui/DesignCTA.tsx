    import Image from "next/image";

    interface DesignCTAProps {
      title: string;
      description: string;
      buttonText: string;
      images?: string[]; // optional grid images
      mainImage?: string; // optional single image
    }

    export default function DesignCTA({
      title,
      description,
      buttonText,
      images,
      mainImage,
    }: DesignCTAProps) {
      return (
        <div className="w-full md:w-[48%] bg-gradient-to-b from-[#BEBEBE4D] to-[#7D7D7D0D] rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-display text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-4">{description}</p>
            <button className="bg-[#0A1F44] text-white px-6 py-2 rounded-full text-sm hover:bg-[#0A1F44]/80 transition">
              {buttonText}
            </button>
          </div>

          {/* If grid of images */}
          {images && (
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-36 rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${title} ${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* If single main image */}
          {mainImage && (
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={mainImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      );
    }
