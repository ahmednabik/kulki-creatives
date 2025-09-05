const ImageGrid = () => {
  return (
    <div>
        {/* Image Grid */}
      <div className="w-full px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl aspect-square overflow-hidden">
            <img
              src="/nooro-health-supplement-bottle-on-green-background.jpg"
              alt="Nooro project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#ff4f01] to-[#e04501] rounded-3xl aspect-square overflow-hidden">
            <img
              src="/tea-packaging-design-on-orange-background.jpg"
              alt="Tea packaging"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl aspect-square overflow-hidden">
            <img
              src="/food-container-packaging-on-purple-background.jpg"
              alt="Food container"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-green-500 rounded-3xl aspect-square overflow-hidden">
            <img
              src="/mushroom-supplement-bottle-on-yellow-background.jpg"
              alt="Mushroom supplement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl aspect-square overflow-hidden">
            <img
              src="/purple-supplement-bottle-on-purple-background.jpg"
              alt="Purple supplement"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ImageGrid;