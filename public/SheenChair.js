/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/SheenChair.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SheenChair_fabric.geometry} material={materials['fabric Mystere Mango Velvet']} />
      <mesh geometry={nodes.SheenChair_wood.geometry} material={materials['wood Brown']} />
      <mesh geometry={nodes.SheenChair_metal.geometry} material={materials.metal} />
      <mesh geometry={nodes.SheenChair_label.geometry} material={materials.label} position={[0, 0.24, 0.06]} rotation={[-0.09, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/SheenChair.gltf')
