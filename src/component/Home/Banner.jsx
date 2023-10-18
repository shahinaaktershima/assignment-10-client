

const Banner = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="carousel w-full h-[500px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.postimg.cc/pV5KjJbv/group-diverse-friends-music-concept.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.postimg.cc/wBJdJrVJ/teen-girls-scared-with-movie.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.postimg.cc/5tjSRcGY/friends-watching-tv.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.postimg.cc/x13JJZB4/6g-internet-connection-collage.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;

