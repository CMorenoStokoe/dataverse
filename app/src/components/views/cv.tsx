
/*

    CV page

*/


export const CV = ():JSX.Element =>  <div className='m-2 p-2 flex flex-col items-center animate__animated animate__flipInY'>
    <object data="cv.pdf" type="application/pdf" width="100%" height="100%">
        <a href="cv.pdf"> Alternatively, access the PDF by clicking here </a>
    </object>
</div>;

