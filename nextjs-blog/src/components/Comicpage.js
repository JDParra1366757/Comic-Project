import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Comicpage = ({link, pagina}) => {
    return (
            <div>
                 <a href={link} className={pagina}>
                    dumdum
                </a>
            </div>
    );
};

export default Comicpage;
