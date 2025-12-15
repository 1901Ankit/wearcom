

const InputField = ({ id, label, type = "text", Icon = null }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full rounded-lg border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[10] bg-secondary px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>

      {/* Icon shown if pass is true */}
      {Icon && (
        <Icon className="w-5 h-5 text-primary absolute right-2 top-1/2 transform -translate-y-1/2" />
      )}
    </div>
  );
};

export default InputField;
