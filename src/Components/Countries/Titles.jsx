const Titles = ({heading , subHeading}) => {
  return (
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {heading}
      </h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        {subHeading}
      </h1>
    </div>
  );
};

export default Titles;
