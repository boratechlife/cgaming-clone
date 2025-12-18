import React from 'react';

interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    srcSet?: string;
  };
}

interface AdjudicationSectionProps {
  members: CommitteeMember[];
}

const CommitteeMemberCard: React.FC<{ member: CommitteeMember }> = ({
  member,
}) => {
  return (
    <div
      className="framer-aTYCc framer-nvrgmi framer-v-nvrgmi"
      data-framer-name="Variant 1"
    >
      <div
        className="framer-1p3pw81"
        data-framer-name="Divider"
        style={{ backgroundColor: 'rgb(28, 28, 28)' }}
      ></div>
      <div className="framer-180beoc">
        <div
          data-framer-background-image-wrapper={true}
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            inset: '0px',
          }}
        >
          <img
            src={member.image.src}
            alt={member.name}
            width={member.image.width}
            height={member.image.height}
            srcSet={member.image.srcSet}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              objectPosition: 'center center',
              objectFit: 'cover',
            }}
            decoding="auto"
          />
        </div>
      </div>
      <div className="framer-15lamvk">
        <div
          className="framer-16rnp7f"
          data-framer-component-type="RichTextContainer"
        >
          <h3 className="framer-text">{member.name}</h3>
        </div>
        <div
          className="framer-14f2ulj"
          data-framer-appear-id="14f2ulj"
          data-framer-component-type="RichTextContainer"
        >
          <p className="framer-text">{member.title}</p>
        </div>
      </div>
    </div>
  );
};

const AdjudicationSection: React.FC<AdjudicationSectionProps> = ({
  members,
}) => {
  return (
    <div
      className="framer-11hkvf framer-yfd0o"
      data-framer-name="Works"
      id="works"
      style={{
        background:
          'linear-gradient(180deg, #5630bf 0%, #3c2185 52.7027%, #0d021b 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '94px',
        width: '100%',
        height: 'min-content',
        padding: '179px 60px',
        scrollMarginTop: '40px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <div
        className="framer-1izm341"
        data-framer-name="Container"
        id="testimonials-b"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '80px',
          width: '100%',
          maxWidth: '1280px',
          height: 'min-content',
          padding: '0 60px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <div
          className="framer-73yfo7"
          data-framer-name="Row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '120px',
            width: '100%',
            height: 'min-content',
            padding: '0',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <div
            className="framer-14iwv2n"
            data-framer-name="Content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '14px',
              width: '1px',
              height: 'min-content',
              padding: '21px 0',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <div
              className="framer-n4nkfv"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
            >
              <h2 className="framer-text">Meet the Adjudication Committee</h2>
            </div>
            <div className="ssr-variant hidden-19jhyg3 hidden-79vzgs">
              <div
                className="framer-y3bhaf"
                data-framer-name="Supporting text"
                data-framer-component-type="RichTextContainer"
              >
                <p className="framer-text">
                  The adjudication committee of the Canadian Games Awards is
                  made up of passionate industry leaders and experts who embody
                  the creativity and talent of Canadian gaming. Their dedication
                  ensures that excellence in game development is celebrated
                  nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="framer-59vzog"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          height: 'min-content',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="ssr-variant hidden-19jhyg3 hidden-79vzgs">
          <div
            className="framer-8xnxsy"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
          >
            <h2 className="framer-text">Adjudication Process Managers</h2>
          </div>
        </div>

        <div
          className="framer-b24hyo"
          style={{
            display: 'grid',
            gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
            gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
            gridAutoRows: 'minmax(0, 1fr)',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
            height: 'min-content',
            padding: '0',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <div className="ssr-variant hidden-19jhyg3 hidden-1i4qb03 hidden-79vzgs">
            <div className="framer-1d901lj-container">
              {members.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjudicationSection;
