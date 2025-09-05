import { Button } from "@/components/ui/button"

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black rounded-full px-6 py-3 flex items-center gap-6">
        <Button variant="ghost" className="text-[#ff4f01] bg-[#ff4f01]/10 px-4 py-2 rounded-full text-sm">
          Services
        </Button>
        <Button variant="ghost" className="text-white hover:text-[#ff4f01] px-4 py-2 rounded-full text-sm">
          Features
        </Button>
        <Button variant="ghost" className="text-white hover:text-[#ff4f01] px-4 py-2 rounded-full text-sm">
          Projects
        </Button>
        <Button variant="ghost" className="text-white hover:text-[#ff4f01] px-4 py-2 rounded-full text-sm">
          Pricing
        </Button>
        <Button variant="ghost" className="text-white hover:text-[#ff4f01] px-4 py-2 rounded-full text-sm">
          Reviews
        </Button>
      </div>
    </div>
  )
}
