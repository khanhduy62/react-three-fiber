import './index.css'
import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei';

export function Model({ ...props }) {
  const { nodes, materials } = useGLTF('/Lamp.gltf')
  return (
    <group {...props} dispose={null} scale={5}>
      <mesh geometry={nodes.lamp.geometry} material={materials.IridescenceLamp}>
        <meshBasicMaterial color={props.customColors.fabric} />
      </mesh>
      <mesh geometry={nodes.lamp_transmission.geometry} material={materials.IridescenceLampTransmissionIridescence}>
        <meshBasicMaterial color={props.customColors.wood} />
      </mesh>
      <mesh geometry={nodes.lamp_iridescence.geometry} material={materials.IridescenceLampIridescence}>
        <meshBasicMaterial color={props.customColors.metal} />
      </mesh>
    </group>
  )
}

function App() {
  const [fabric, setFabric] = useState("#000000")
  const [wood, setWood] = useState("#ffffff")
  const [metal, setMetal] = useState("#e5dcdc")

  return (
    <Suspense fallback={null}>
      <div className="App">
        <h1>Three.js Demo</h1>
        <div className="wrapper">
            <div className="card">
                <div className="product">
                  <Canvas>
                    <ambientLight />
                    <Model customColors={{fabric, metal, wood }}/>
                    <OrbitControls makeDefault />
                  </Canvas>
                </div>
                <div className='colors'>
                    <div>
                        <input type="color" id="fabric" name="fabric"
                              value={fabric} 
                              onChange={(e) => setFabric(e.target.value)}/>
                        <label for="fabric">Fabric</label>
                      </div>

                    <div>
                        <input type="color" id="metal" name="metal"
                                value= {metal}
                                onChange={(e) => setMetal(e.target.value)}/>
                        <label for="metal">Metal</label>
                    </div>
                    <div>
                        <input type="color" id="wood" name="wood"
                                value={wood} 
                                onChange={(e) => setWood(e.target.value)}/>
                        <label for="label">Wood</label>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
