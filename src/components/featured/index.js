import React, { useEffect, useState } from 'react'
import Card from '../card'
import './style.css'
const FeaturedListing = () => {
  const [cars, setCars] = useState(false)
  const [Copycars, setCopyCars] = useState(false)
  const [selectCars, setSelectCars] = useState(false);
  async function fetchData() {
    const res = await (await fetch("https://praxesdemo-default-rtdb.firebaseio.com/cars.json")).json();
    const response = await (await fetch("https://praxesdemo-default-rtdb.firebaseio.com/brands.json")).json()

    // to remove the null value being received in the array from API
    setCars(res.filter(item => !!item));
    setCopyCars(res.filter(item => !!item));
    setSelectCars(response.filter(item => !!item));
  }
  useEffect(() => {
    fetchData();
  }, []);
  const filterCar = (event) => {
    let model = event.target.value;
    console.log("cars0", cars);
    let filtredData = Copycars.filter((item) => item.brand === model)
    setCars(filtredData)
  }
  return (
    <div className='listing'>
      <div className='container'>
        <div className='cars'>
          <div className='title'>
            <h2>Featured Listings</h2>
          </div>
          <div className='select-menu'>
            <select onChange={(e) => filterCar(e)}>
              <option>Select a brand</option>
              {
                selectCars && selectCars.map((selectCar) => (
                  <option value={selectCar}>{selectCar}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='card-wrapper'>
          {
            cars && cars.map((car, i) => (
              <div className='card-col' key={i}>
                <Card cars={car} />
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default FeaturedListing
