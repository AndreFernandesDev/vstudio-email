const notice = `
<!DOCTYPE {{{ page.doctype || 'html' }}}>
<html
  lang="{{ page.language || 'en' }}"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <meta charset="{{ page.charset || 'utf-8' }}" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap");
    </style>

    <if condition="page.title">
      <title>{{{ page.title }}}</title>
    </if>
    <style>
      {{{ page.css }}}
    </style>
    <stack name="head" />
  </head>
  <body
    class="m-0 p-0 w-full [word-break:break-word] [-webkit-font-smoothing:antialiased] bg-white"
  >
    <div lang="{{ page.language || 'en' }}">
      <div class="bg-white font-sans">
        <table align="center" class="shadow-md">
        <tr>
            <td class="w-[552px] max-w-full">
              <div class="text-center">
                  <a class="block bg-white" href="https://www.vitoria.studio">
                  <img
                      class="w-full"
                      src="https://drive.google.com/uc?export=view&id=1_ou3UxGNHWnAhM8yBa2e3pogXOkVuGKI"
                      alt="VitoriaStudio"
                  />
                  </a>
              </div>

              <table class="w-full text-center leading-normal text-neutral-15">
                <tr>
                  <td class="px-10 py-16 sm:px-8 text-base">
                    <h1 class="m-0 mb-2 font-serif text-6xl">
                      {{page.greeting}}
                    </h1>

                    <p class="m-0 uppercase">
                      {{page.greetingText}}
                    </p>
                  </td>
                </tr>
              </table>
              <table
                class="mx-auto w-full max-w-[480px] p-12 pb-0 border-2 border-neutral-90 rounded-lg border-solid text-center"
              >
                <tr>
                  <td>
                    <h2 class="m-0 mb-2 font-serif text-4xl font-medium">
                      {{page.cardTitle}}
                    </h2>
                    <div class="w-20 h-0.5 bg-yellow-100 mx-auto mb-12"></div>
                  </td>
                </tr>
                <each loop="item in page.details">
                  <tr>
                    <td class="font-medium uppercase text-neutral-50 pb-2">
                      {{ item.name }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center pb-12 leading-[1.75]">
                      {{ item.value }}
                    </td>
                  </tr>
                </each>
              </table>
              <table
                class="mt-16 p-6 bg-green-95 text-center w-full text-neutral-15"
              >
                <tr>
                  <td>
                    <h4 class="m-0 mb-4 font-serif text-md font-medium">
                      {{ page.bottomText }} @VitoriaStudio
                    </h4>
                    <a
                      href="https://www.victoria.studio"
                      class="m-0 text-sm font-normal no-underline"
                      ><span class="text-neutral-15 text-sm">www.victoria.studio</span></a
                    >
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
`;

module.exports = {
  notice: notice,
};
