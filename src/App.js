import './index.css'
import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei';

export function Model({ ...props }) {
  const { nodes, materials } = useGLTF('/shoe.gltf')

  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces}>
        <meshBasicMaterial color={props.customColors.lace} />
      </mesh>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}>
        <meshBasicMaterial color={props.customColors.mesh} />
      </mesh>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps}>
        <meshBasicMaterial color={props.customColors.soul} />
      </mesh>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}>
        <meshBasicMaterial color={props.customColors.soul} />
      </mesh>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}>
        <meshBasicMaterial color={props.customColors.soul} />
      </mesh>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}>
        <meshBasicMaterial color={props.customColors.stripes} />
      </mesh>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band}>
        <meshBasicMaterial color={props.customColors.stripes} />
      </mesh>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}>
        <meshBasicMaterial color={props.customColors.soul} />
      </mesh>
    </group>
  )
}

function App() {
  const [mesh, setMesh] = useState("#000000")
  const [lace, setLace] = useState("#ffffff")
  const [stripes, setStripes] = useState("#8e2525")
  const [soul, setSoul] = useState("#ffffff")

  return (
    <Suspense fallback={null}>
      <div className="App">
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                  <Canvas>
                    <ambientLight />
                    <Model customColors={{mesh, stripes , soul, lace }}/>
                    <OrbitControls makeDefault />
                  </Canvas>
                </div>
                <div className='colors'>
                    <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <label for="mesh">Mesh</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <label for="stripes">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                        <label for="soul">Soul</label>
                    </div>
                    <div>
                        <input type="color" id="lace" name="lace"
                                value={lace} 
                                onChange={(e) => setLace(e.target.value)}/>
                        <label for="soul">Lace</label>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
