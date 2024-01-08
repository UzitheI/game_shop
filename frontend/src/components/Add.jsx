import React, { useState } from 'react';
import background from "../assets/background.mp4"; 
import Header from "../components/Header"

const genresList = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

const platforms = ['Playstation', 'Xbox', 'Nintendo', 'PC', 'ios'];

const Add = () => {
  const [formData, setFormData] = useState({
    name: '',
    selectedGenres: [],
    about: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'selectedGenre') {
        const selectedGenres =Array.from(e.target.selectedOptions,(option)=>option.value);
      setFormData({
        ...formData,
        selectedGenres,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRemove = (genre) => {
    setFormData({
      ...formData,
      selectedGenres: formData.selectedGenres.filter((selectedGenre) => selectedGenre !== genre),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data submitted', formData);
  };

  return (
    <div className="relative h-screen text-white font-cuteFont size-2xl font-bold ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-10">
        <Header />
        <h1 className="text-6xl pt-4 bg-black bg-opacity-80 mx-44 mt-4 text-white flex justify-center font-bold rounded-lg">
          Type a game that you want to add
        </h1>

        <div className='flex  mt-8 bg-black bg-opacity-55 w-2/3 flex-col justify-center mx-44 gap-8'>
          <h2 className='text-2xl flex justify-center '>General Information</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div className='flex flex-col justify-center align-middle'>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInput}
                required
                className='w-1/2 text-black'
              />
            </div>
            <div>
              <label htmlFor="selectedGenre">Select Genre:</label>
              <select
              multiple
                name="selectedGenre"
                id="genre"
                value={formData.selectedGenres}
                onChange={handleInput}
                required
                className='text-black'
              >
                <option value="" disabled>Select an option</option>
                {genresList.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <div>
                {formData.selectedGenres.map((genre) => (
                  <div key={genre} className='inline-block bg-gray-300 p-2 m-1 rounded-lg '>
                    {genre}
                    <button onClick={() => handleRemove(genre)} className='ml-2'>Remove</button>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="about">About:</label>
                <input type="text" id="about" name="about" className='text-black ' />
              
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
