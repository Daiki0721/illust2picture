import React from "react";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from "react-scroll";

export default function Header() {
  return (
           <div style={{
                 margin:0,
                 padding:0,
                 height: "90vh",
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
            }}>
              　　<div>
                     <h2>Illust To Photo</h2>
                     <p>You can make a real photo from the uploaded illust</p>
                  </div>
              　　<div>
                     <Button variant="contained" size="large" color="info">
                       <Link
                         to="try"
                         spy={true}
                         smooth={true}
                         duration={500}
                      >
                        Try it now.
                       </Link>
                    </Button>
              　　</div>
            </div>
  );
}
