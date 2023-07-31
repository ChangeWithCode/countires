const Data = ({heading , subHeading}) => {
  return (
    <div class="flex border-t border-gray-200 py-2 px-6">
      <span class="text-gray-500">{heading}</span>
      <span class="ml-auto text-gray-900">{subHeading}</span>
    </div>
  );
};

export default Data;
