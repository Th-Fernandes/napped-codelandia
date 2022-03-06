export default function DefaultContainer(props) {
  return (
    <section
      style={{
        maxWidth: "112rem",
        margin: "auto",
      }}
    >
      {props.children}
    </section>
  )
}