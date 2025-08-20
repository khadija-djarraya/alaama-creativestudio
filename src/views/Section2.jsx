export default function Section2() {
  return (
    <div 
      style={{ 
        minHeight: 'fit-content',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        position: 'relative',
        // overflow: 'hidden'
        top: 0
      }}
    >
      {/* Add a detection helper at the top of the section */}
      <div 
        data-scroll
        data-scroll-call="updateSection"
        style={{
          position: 'absolute',
          top: '10vh',
          left: 0,
          width: '100%',
          height: '1px',
          pointerEvents: 'none',
          visibility: 'hidden'
        }}
      />
      
      <div
        data-scroll
        data-scroll-speed="-1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          marginTop: '20vh',
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-30"
          style={{ willChange: 'transform' }}
        >
         <img
  src="/images/coc.png"
  // alt="Description"
  style={{
    transform: 'rotate(-20deg)',
    fontSize: 'clamp(8rem, 8vw, 15rem)',
    fontWeight: 'bold',
    margin: 0,
    objectFit: 'cover'
  }}
/>
        </div>
      </div>
      
      {/* Line 1 */}
       <div
        data-scroll
        data-scroll-speed="-1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform'
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="30"                   // very fast L→R
          style={{ willChange: 'transform' }}
        >
          <h3
            style={{
              display: 'inline-block',
              transform: 'rotate(10deg)',
              fontSize: 'clamp(8rem, 8vw, 15rem)',
              fontWeight: 'bold',
              margin: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
              color: '#000',
              textShadow: '0 4px 6px rgba(178, 172, 172, 0.93)',
              fontFamily:'Garet,sans-serif',
              paddingInline:'20px'

            }}
          >
            We Build Awareness.
          </h3>
        </div>
      </div>

      {/* Add another detection helper in the middle */}
      <div 
        data-scroll
        data-scroll-call="updateSection"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '1px',
          pointerEvents: 'none',
          visibility: 'hidden'
        }}
      />

<div
        data-scroll
        data-scroll-speed="1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          marginTop: '20vh',
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="30"
          style={{ willChange: 'transform' }}
        >
         <img
  src="/images/coccinn.png"
  // alt="Description"
  style={{
    transform: 'rotate(15deg)',
    fontSize: 'clamp(8rem, 8vw, 15rem)',
    fontWeight: 'bold',
    margin: 0,
    objectFit: 'cover'
  }}
/>
        </div>
      </div>
      {/* Line 2 */}
      <div
        data-scroll
        data-scroll-speed="2"
        style={{
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '5%',
          marginTop: '-20vh',
          willChange: 'transform'
        }}
      >
        <div
        data-scroll
        data-scroll-speed="-1"
        style={{
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10vh',
          willChange: 'transform'
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-30"                   // very fast L→R
          style={{ willChange: 'transform' }}
        >
          <h3
            style={{
              display: 'inline-block',
              transform: 'rotate(-15deg)',
              fontSize: 'clamp(8rem, 8vw, 15rem)',
              fontWeight: 'bold',
              margin: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
              color: '#000',
              textShadow: '0 4px 6px rgba(178, 172, 172, 0.93)',
              fontFamily:'Garet,sans-serif',
                            paddingInline:'20px',
              marginTop: '20vh'

            }}
          >
            Drive Engagement.
          </h3>
        </div>
      </div>
    </div>

      {/* Line 3 */}
      <div
        data-scroll
        data-scroll-speed="-1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform'
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="30"                   // very fast L→R
          style={{ willChange: 'transform' }}
        >
          <h3
            style={{
              display: 'inline-block',
              transform: 'rotate(5deg)',
              fontSize: 'clamp(8rem, 8vw, 15rem)',
              fontWeight: 'bold',
              margin: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
              color: '#000',
              textShadow: '0 4px 6px rgba(178, 172, 172, 0.93)',
              fontFamily:'Garet,sans-serif',
              paddingInline:'20px',
              marginTop: '20vh'
            }}
          >
            Launch with impact.
          </h3>
        </div>
      </div>


      {/* Line 4 */}
      <div
        data-scroll
        data-scroll-speed="1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          marginTop: '20vh',
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="30"
          style={{ willChange: 'transform' }}
        >
         <img
  src="/images/coccinn.png"
  // alt="Description"
  style={{
    transform: 'rotate(15deg)',
    fontSize: 'clamp(8rem, 8vw, 15rem)',
    fontWeight: 'bold',
    margin: 0,
    objectFit: 'cover'
  }}
/>
        </div>
      </div>

      {/* Line 4 */}
      <div
        data-scroll
        data-scroll-speed="-1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          marginTop: '20vh',
        }}
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-30"
          style={{ willChange: 'transform' }}
        >
          <h3
            style={{
              display: 'inline-block',
              transform: 'rotate(-15deg)',
              fontSize: 'clamp(8rem, 8vw, 15rem)',
              fontWeight: 'bold',
              margin: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
              color: '#000',
              fontFamily:'Garet,sans-serif',
              textShadow: '0 4px 6px rgba(178, 172, 172, 0.93)',
              paddingInline:'20px'
            }}
          >
            And Deliver Results.
          </h3>
        </div>
      </div>

    </div>
  );
}