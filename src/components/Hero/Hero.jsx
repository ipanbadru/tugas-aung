import React from 'react'

function Hero() {
  return (
    <div className="hero-wrap container">
      <div className="hero-container flex justify-between content-center gap-5">
        <div className="hero-main flex justify-center items-center flex-col w-1/2 px-5 gap-5">
          <div className="hero-text flex text-7xl font-bold justify-center items-center">
            <h1>
            MENGENAL SEJARAH G30S PKI
            </h1>
          </div>
          <div className="hero-desc">
          Gerakan 30 September (G30S/PKI) adalah peristiwa penting dalam sejarah Indonesia yang terjadi pada malam 30 September hingga 1 Oktober 1965.
          </div>
          <div className="hero-button flex w-full">
            <button className='bg-primary p-1 text-white'>
              Foto Pahlawan
            </button>
          </div>
        </div>
        <div className="hero-image w-full flex items-center justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/eb4b/fb63/fa74e05a64e6d2b809f9d4835f0bc807?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PONemaAihTTPsnU0LurnAADjLMcsQiLvU2WjEEHZJJ5ssA8U20RNyMEyaz6oNdBBUSoR~V1omqFh~LQNGFAB9VJ7Eq~Lwus1HmsgK63OTDTJxgto68sDrwVXp1X0iL~EQT8MJ5flFLIQSZKfuZqnz3IW1k0hhwzZzM8HD3s3u2UkYEZ3gUWhniVkDzE4~dAkqjU2qR9LSnaLvXtthoDeNu~zuf2cD-D6oY8wqHznqbYnYWFB~dYWIjGPf9lC5ne40Aih5H4MHNnUGs2t4qNSbVJVs6i8TXLgXus4tKq0H5xHqDeqhoF~x8zd2ImKVpd5qJNyW-HRIgQzg42heUOUow__" alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
