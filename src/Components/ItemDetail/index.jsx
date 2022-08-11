import React from 'react';


const ItemDetail  = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className='detail_image' src= {data.image}  alt="" />
                <div className="content">
                    <h1> {data.title} </h1>
                    <p>
                    Motor	4 Tiempos, enfríado por
líquido, DOHC bicilíndrico, 2 cilíndros en línea
Cilindrada	689 cc,
Alimentación	Fuel Injection,
Diámetro x carrera	80.0 mm x 68.6 mm,
Potencia	67.0 HP a 9,000 RPM,
Torque Máximo	68.0 NM a 6,500 RPM,
Arranque	Eléctrico,
Capacidad de
combustible	16 L,
Transmisión	6 Velocidades, manual.

                    </p>
                </div>
            </div>
        </div>
        
        
    );
}


export default ItemDetail;