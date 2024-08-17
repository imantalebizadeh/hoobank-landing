import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className="flex-center">
      <div className="flex-center w-full flex-wrap gap-y-5">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex min-w-[120px] flex-1 justify-center sm:min-w-[192px]"
          >
            <img
              src={client.logo}
              alt="client"
              className="w-[100px] object-contain sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
