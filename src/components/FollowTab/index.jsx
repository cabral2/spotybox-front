import UserCard from "../user-card";

export default function FollowTab({ type }) {
  const users = [
    {
      name: "Davi Emediato",
      location: "Belo Horizonte - MG",
      description: "Apreciador da natureza",
      imageUrl:
        "https://noticias.gospelmais.com.br/files/2012/05/xaropinho.jpg",
    },
    {
      name: "Iury Zanonni",
      location: "Barreirão - MG",
      description: "Apreciador de reagge",
      imageUrl: "https://i.ytimg.com/vi/B_90wtRcvZw/hqdefault.jpg",
    },
    {
      name: "Savio Cabral",
      location: "Sete Lagoas - MG",
      description: "Apreciador da vida",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1268911631427342336/8f0WvExJ_400x400.jpg",
    },
  ];
  return (
    <>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          location={user.location}
          description={user.description}
          unfollow={type === "unfollow" ? true : false}
          blockUser={type === "blockUser" ? true : false}
          imageUrl={user.imageUrl}
        />
      ))}
    </>
  );
}
