import React from 'react'

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
            <div className="col">
              <h2>King Kebab</h2>
            </div>
            <div className="col">
                <ul>
                    <li><h3>Öffnungszeiten</h3></li>
                    <li>Montag - Fritag 11:00 - 21:00</li>
                    <li>Samstag, Sonntag 12:00 - 21:00</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><h3>Adresse</h3></li>
                    <li>{props.address}</li>
                    <li>{props.address2}</li>
                    <li>{props.phone}</li>
                </ul>
            </div>
            
        </div>
    </footer>
  )
}
