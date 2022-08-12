const WikiResult = ({pageid, title, snippet, timestamp}) => {
  return(
    <div className="wiki-result">
      <a href={`https://en.wikipedia.org?curid=${pageid}`}>
        <h3>{title}</h3>
      </a>
      <p dangerouslySetInnerHTML={{ __html: snippet }}></p>
      <p>{timestamp}</p>
    </div>
  );
}

export default WikiResult;
