const Image = ({image}) => {
    return ( 

        <img
        loading="lazy"
        class="h-60 w-full object-cover object-center"
        src={image}
      />


     );
}
 
export default Image;