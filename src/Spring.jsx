import React from 'react'

export const Spring = () => {
  return (
    <>
    
    <div className='container mt-5 d-flex justify-content-center'>

        <div style={{width: 500}}>

            <form className='border p-3'>

                <legend className='h3 text-center'>Add student</legend>

                <div className='form-group mb-3'>

                    <label>Student name</label>
                    <input type="text"  placeholder='Student name' className='form-control'/>

                </div>

                <div className='form-group mb-3'>

                    <label>Student address</label>
                    <input type="text" placeholder='Student address' className='form-control'/>

                </div>

                <div className='d-flex justify-content-center'>   

                    <input type="submit" className='btn btn-primary' value="Submit"/>

                </div>

            </form>

        </div>

    </div>

    
    </>
  )
}
