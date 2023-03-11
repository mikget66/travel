import React from 'react'
import './dash.css'
const dashboard = () => {
  return (
    <main>
    <nav>
      <div className="dash">dashboard</div>
      <ul>
        <li><a href='#trips'>trips</a></li>
        <li><a href='#users'>users</a></li>
        <li>reviewe</li>
      </ul>
    </nav>
      <section id='home'>

      </section >
      <section id='trips'>
        <h1>trips</h1>
          <div className="container">
            <div className="trip">
              <table>
                <tr>
                  <th>location</th>
                  <th>number</th>
                  <th>date</th>
                  <th>price</th>
                  <th>action</th>
                </tr>
                <tr>
                  <td>pyramid</td>
                  <td>30</td>
                  <td>5/5/2023</td>
                  <td>20 egp</td>
                  <td>
                    <a href="" className='btn'> update</a>
                    <a href="" className='btn-delete'>delete</a>
                  </td>
                </tr>
                <tr>
                  <td>pyramid</td>
                  <td>30</td>
                  <td>5/5/2023</td>
                  <td>20 egp</td>
                  <td>
                    <a href="" className='btn'> update</a>
                    <a href="" className='btn-delete'>delete</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
      </section>
      <section id='users'>
      <h1>users</h1>
          <div className="container">
            <div className="trip">
              <table>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>action</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>nader</td>
                  <td>nader@gmail.com</td>
                  <td>
                    <a href="" className='btn-delete'>delete</a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>A7A</td>
                  <td>A7A@gmail.com</td>
                  <td>
                    <a href="" className='btn-delete'>delete</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
      </section>
    </main>
  )
}

export default dashboard