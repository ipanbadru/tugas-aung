export default function CardPahlawan({img, name, children, className}) {
  return (
    <div className={`bg-primary rounded-2xl w-full px-4 py-4 flex gap-2 justify-between text-white ${className || ''}`}>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-xs leading-6 mt-2">
            {children}
        </p>
      </div>
      <img
        src={img}
        alt={name}
        className="w-2/6 rounded-lg object-cover object-center h-36"
      />
    </div>
  );
}
