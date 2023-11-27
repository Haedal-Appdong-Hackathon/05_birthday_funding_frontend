/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 gift.gltf 
Author: davimfs7 (https://sketchfab.com/davimfs7)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gift-5f8efb11edda4a9dab0d92de22793ea3
Title: Gift
*/

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

/* eslint-disable */
export default function Model(props) {
    const { nodes, materials } = useGLTF('/gift.gltf');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.material}
                position={[0, 0.895, 0]}
                scale={1.464}
            />
            <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.material}
                position={[0, 1.98, 0]}
                scale={[1.545, 0.383, 1.545]}
            />
            <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.material_1}
                position={[0, -0.569, 0]}
                scale={[0.477, 1, 1.465]}
            />
            <mesh
                geometry={nodes.Object_10.geometry}
                material={materials.material_1}
                position={[0, -0.569, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.477, 1, 1.465]}
            />
            <mesh geometry={nodes.Object_12.geometry} material={materials.material_1} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.material_1} rotation={[Math.PI / 2, 0, 0]} />
            <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.material_1}
                position={[-0.155, 2.575, -0.033]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
        </group>
    );
}

useGLTF.preload('/gift.gltf');
