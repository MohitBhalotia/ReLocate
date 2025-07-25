
import { SectionCards } from "@/components/section-cards";


export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <video src="/drop_delivery.mp4" autoPlay loop muted className="w-full h-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
