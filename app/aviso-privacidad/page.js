import Link from "next/link";

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Logo y Título */}
          <div className="text-center mb-8">
            <div className="flex justify-end mb-4">
              <img
                src="/logo-azul.png"
                alt="BETALEASING Logo"
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 uppercase">
              Aviso de Privacidad
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              {/* Sección 1 - Información General */}
              <section>
                <p className="text-base text-gray-900 mb-4 leading-relaxed">
                  <strong>
                    BETA LEASING, SOCIEDAD ANÓNIMA PROMOTORA DE INVERSIÓN DE
                    CAPITAL VARIABLE
                  </strong>{" "}
                  (En lo sucesivo referido indistintamente como
                  &quot;BETALEASING&quot;), se preocupa por la confidencialidad
                  y seguridad de la información que recaba en su actividad
                  comercial, así como, los datos personales provenientes de sus
                  proveedores, colaboradores, clientes, arrendatarios y usuarios
                  de sus servicios en general, por lo que tiene el compromiso y
                  otorga la máxima importancia a la confidencialidad, privacidad
                  y debida protección de la información personal que le es
                  confiada por Usted. Por su código de ética, BETALEASING está
                  comprometido a manejar sus datos personales de manera
                  responsable y con apego a lo previsto por la Ley Federal de
                  Protección de Datos Personales en Posesión de Particulares (En
                  lo sucesivo referida como &quot;LFPDPPP&quot;), su Reglamento
                  (En lo sucesivo &quot;RLFPDPPP&quot;) y demás normatividad
                  aplicable. Por ello, protegemos su información mediante
                  medidas de seguridad tanto físicas como electrónicas en su
                  almacenamiento y con la continua revisión de nuestros procesos
                  de protección de la información. Por este motivo compartimos
                  con usted nuestra política de privacidad y del cómo
                  salvaguardamos la integridad, privacidad y protección de sus
                  datos personales, en apego a la LFPDPPP y su Reglamento. Usted
                  como titular de datos personales, tiene a su disposición, en
                  todo momento éste aviso de privacidad en nuestra página de
                  internet:{" "}
                  <a
                    href="https://www.betaleasing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    www.betaleasing.com
                  </a>{" "}
                  y puede acceder al contenido de la Ley en el portal que el
                  Gobierno Federal a través de la Secretaría de Gobernación,
                  pone a su disposición en{" "}
                  <a
                    href="http://www.ordenjuridico.gob.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.ordenjuridico.gob.mx
                  </a>
                </p>
              </section>

              {/* Sección 2 - Recopilación y Protección de Datos */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Para BETALEASING resulta necesario recopilar ciertos datos
                  personales para llevar a cabo las actividades intrínsecas a su
                  actividad. BETALEASING tiene la obligación legal y social de
                  cumplir con las medidas legales y de seguridad suficientes
                  para proteger aquellos datos personales que haya recabado para
                  las finalidades que en el presente aviso de privacidad serán
                  descritas. Además de este aviso de privacidad general,
                  BETALEASING ha dispuesto avisos pertinentes en cada uno de los
                  momentos adecuados previos a la recolección de la información.
                  Nuestras políticas de privacidad y datos de contacto se
                  encuentran disponibles en:{" "}
                  <a
                    href="https://www.betaleasing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    www.betaleasing.com
                  </a>{" "}
                  Todo lo anterior se realiza con el objetivo de que usted tenga
                  pleno control y decisión sobre sus datos personales. Por ello,
                  le recomendamos que lea atentamente la siguiente información.
                </p>
              </section>

              {/* Sección 3 - Compartición de Información */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  BETALEASING, para cumplir la(s) finalidad(es) descrita(s) en
                  el presente Aviso de Privacidad u otras aquellas exigidas
                  legalmente o por las autoridades competentes, podrá comunicar
                  a sus proveedores, Sociedades de Información Crediticia y
                  cualquier autoridad que la supervise; así como, a sus socios,
                  asociados, partes relacionadas, proveedores, y, a la sociedad
                  que administra su dominio y base de datos en la red mundial
                  internet, cierta información recopilada de usted.
                </p>
              </section>

              {/* Sección 4 - Derechos ARCO y Revocación de Consentimiento */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Usted podrá en cualquier momento revocar este consentimiento,
                  al igual que usted podrá ejercer cualquiera de los derechos
                  &quot;ARCO&quot; (acceso, rectificación, cancelación u
                  oposición) comunicándose con nosotros, siempre y cuando se den
                  los supuestos de la LFPDPPP. Usted podrá acceder en todo
                  momento al presente aviso de privacidad a través de nuestro
                  sitio web; así como, cualquier cambio sustancial o total que
                  se realice le será comunicado por ese medio:
                  www.betaleasing.com/privacidad.
                </p>
              </section>

              {/* Sección 5 - Identificación del Responsable */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                  Identificación del Responsable
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  <strong>BETA LEASING, S.A.P.I. DE C.V.</strong>, sociedad
                  anónima promotora de inversión de capital variable, con
                  domicilio en Isaac Newton No. 186 interior 401, Colonia
                  Polanco, Delegación Miguel Hidalgo, México, C.P. 11560, Ciudad
                  de México, teléfono (+52) (55) 8663-0720, es el responsable
                  del tratamiento de sus datos personales.
                </p>
              </section>

              {/* Sección 6 - Principio de Información */}
              <h5 className="font-bold text-gray-900 mb-4 text-center ml-4">
                Principio de información
              </h5>
              <section>
                <p className="text-gray-700 leading-relaxed mb-6">
                  BETALEASING le informa que recaba o recabará de usted, los
                  datos personales necesarios para la adecuada contratación de
                  sus productos, realización de las operaciones y prestación de
                  los servicios, así como para la celebración de los demás actos
                  que el Responsable puede realizar conforme a la Ley y sus
                  estatutos sociales. Dichos datos personales pueden haber sido
                  o pueden ser obtenidos de usted personalmente o bien, por
                  cualquier medio electrónico, óptico, sonoro, visual, o a
                  través de otra tecnología. Asimismo, podemos obtener datos
                  personales de los que usted es titular, a través de terceros y
                  de otras fuentes permitidas por la Ley, tales como las
                  sociedades de información crediticia. Los datos se recabarán
                  de los documentos que usted proporcione como de los asentados
                  en la(s) solicitud(es) de servicio(s) que presenten a
                  BETALEASING señalados en éste aviso de privacidad, como de los
                  servicios complementarios que se utilicen para brindar el
                  servicio requerido, formalizar la contratación y mantenimiento
                  de la relación comercial que se origine.
                </p>
                <h5 className="font-bold text-gray-900 mb-4 text-center ml-4">
                  DATOS PERSONALES QUE RECABAMOS
                </h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Usted puede navegar por nuestro sitio web sin proporcionar
                  datos personales, sin embargo, existen determinadas secciones
                  dentro del mismo en donde puede proporcionar voluntariamente
                  sus datos. Sus datos pueden ser recabados en diferentes
                  situaciones, por ejemplo, cuando decide consultarnos sobre
                  nuestros productos y servicios, o, cuando decide aplicar una
                  solicitud de arrendamiento o financiamiento, al enviarnos un
                  correo electrónico, o bien, al registrarse para recibir
                  información de interés o a nuestro boletín informativo, así
                  como aquellos que nos proporcione con miras al establecimiento
                  de una relación jurídica, por ejemplo, cuando decide contratar
                  nuestros productos, arrendamientos, servicios o prestarnos
                  algún servicio o proveernos algún bien. Los datos personales
                  que podemos recabar, pertenecen a las siguientes categorías:
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos de identificación: nombre, domicilio particular,
                  fecha de nacimiento, teléfono fijo y/o móvil, fax, correo
                  electrónico, imagen, estado civil, sexo, firma, firma
                  electrónica, CURP, entre otros.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos académicos: trayectoria educativa, título, número de
                  cédula profesional, especialidad, certificados, actividades
                  extracurriculares, historial académico
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos laborales o comerciales: la ocupación, puesto, área
                  o departamento, domicilio, correo electrónico, número de
                  teléfono fijo o móvil y fax, domicilio, teléfono y correo de
                  trabajo, referencias laborales o comerciales, referencias
                  personales, historial de desempeño en o de, la compañía, entre
                  otros.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos de facturación: entidad a la que se hará el cargo,
                  domicilio fiscal, RFC, correo electrónico
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos financieros y patrimoniales:Fuente y monto de sus
                  ingresos, bienes muebles e inmuebles, historial crediticio,
                  ingresos y egresos, cuentas bancarias, seguros, fianzas,
                  servicios contratados, referencias personales, entre otros.
                </p>

                <h5 className="font-bold text-gray-900 mb-4 text-center uppercase">
                  DATOS PERSONALES SENSIBLES TRATADOS
                </h5>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>
                    <strong>Datos biométricos:</strong> con la finalidad de
                    corroborar su identidad, tales como huellas dactilares, voz,
                    reconocimiento facial, geometría de la mano y patrones en
                    iris y retina.
                  </li>
                  <li>
                    <strong>Datos de salud:</strong> estado físico, presente o
                    futuro, en caso de estar interesado en contratar un servicio
                    complementario y el mismo así lo amerite.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  Asimismo le informamos que, para el tratamiento de sus datos
                  patrimoniales y/o financieros se recabará su consentimiento
                  expreso, en tanto que para sus datos sensibles, se recabará su
                  consentimiento expreso y por escrito. Una vez que los datos
                  personales de terceras personas por ejemplo: autorizados,
                  cotitulares, obligados solidarios, cónyuges, beneficiarios,
                  referencias, garantes, avales, fiadores, tutores, proveedores,
                  beneficiarios y demás figuras legales relacionadas con
                  productos y/o servicios sean facilitados por usted al
                  Responsable para el cumplimiento de las finalidades
                  identificadas, usted deberá informar a las terceras personas
                  sobre la existencia del tratamiento de sus datos personales y
                  el contenido del presente aviso de privacidad.
                </p>

                <h5 className="font-bold text-gray-900 mb-4 text-center">
                  Menores e incapaces
                </h5>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  “BETALEASING” es una empresa comprometida con la privacidad de
                  los menores e incapaces; por ello, no recabamos
                  intencionalmente ni tratamos datos personales de menores e
                  incapaces cuando no se cuenta con el consentimiento expreso de
                  sus padres, tutores o representantes legales. Si Usted es
                  padre, tutor o representante legal de un menor o incapaz y
                  sabe que nos ha proporcionado datos personales sin su
                  consentimiento, podrá solicitar que los mismos sean cancelados
                  a la siguiente dirección de correo electrónico
                  dbetanzo@betaleasing.com
                </p>

                <h5 className="font-bold text-gray-900 mb-4 text-center">
                  Clientes
                </h5>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  En el caso que Usted decida contratar nuestros productos o
                  servicios, se recabarán todos los datos personales e
                  información confidencial o no, que resulten convenientes para
                  la adecuada atención de su encomienda. En virtud de lo
                  anterior, cuando se crea el vínculo jurídico al amparo del
                  contrato de arrendamiento y/o promesa de compra venta y/o
                  prestación de servicios, la recolección de sus datos
                  personales se ubicará en los supuestos de excepción previstos
                  en el artículo 10, de la LFPDPPP, es decir, no se requiere de
                  su previo consentimiento para el tratamiento de los datos. No
                  obstante, atendiendo a su código de ética, “BETALEASING”
                  voluntariamente ha dispuesto generar el presente Aviso de
                  Privacidad.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  Al consentimiento otorgado mediante el presente Aviso de
                  Privacidad, aplican los siguientes:
                </p>

                <h1 className="text-3xl font-bold text-gray-900 uppercase text-center">
                  TERMINOS Y CONDICIONES
                </h1>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      1.- Datos del responsable:
                    </h4>
                    <p className="text-gray-700 ml-4">
                      BETA LEASING, S.A.P.I. DE C.V., sociedad anónima promotora
                      de inversión de capital variable, con domicilio en Isaac
                      Newton No. 186 interior 401, Colonia Polanco, Delegación
                      Miguel Hidalgo, México, C.P. 11560, Ciudad de México,
                      teléfono (+52) (55) 8663-0720, correo electrónico:
                      dbetanzo@betaleasing.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      2. Datos Personales:
                    </h4>
                    <p className="text-gray-700 ml-4 mb-4">
                      Como parte de nuestro registro de clientes, proveedores,
                      empleados y usuarios en general, conservamos cierta
                      cantidad de información susceptible de identificación
                      personal sobre usted. Es decir, para las finalidades
                      señaladas en el presente aviso de privacidad, se podrían
                      recabar sus datos de distintas formas, tales como, cuando
                      usted nos los proporciona directamente; cuando visita
                      nuestro sitio de Internet o utiliza nuestros servicios en
                      línea, y cuando obtenemos información a través de otras
                      fuentes. Entre dicha información se podrán incluir e
                      identificar, de manera no limitativa la siguiente:
                    </p>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          1) Datos de identificación:
                        </h5>
                        <p className="text-gray-700">
                          nombre completo del titular de los datos, nombre
                          completo de sus parientes consanguíneos hasta el
                          segundo grado en línea recta y colaterales hasta el
                          cuarto grado, de su cónyuge, así como, de cada uno de
                          estos, su dirección, teléfono de trabajo, correo
                          electrónico, RFC, CURP, lugar y fecha de nacimiento,
                          edad, y nacionalidad.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          2) Datos profesionales:
                        </h5>
                        <p className="text-gray-700">
                          a ocupación, puesto, área o departamento, domicilio,
                          teléfono y correo de trabajo, actividades
                          extracurriculares, referencias laborales, referencias
                          personales, entre otros.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          3) Datos patrimoniales:
                        </h5>
                        <p className="text-gray-700">
                          Fuente y monto de sus ingresos, bienes muebles e
                          inmuebles, cuentas bancarias, referencias personales,
                          historial crediticio, entre otros.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 ml-4 mt-4">
                      Para el supuesto 3), siempre tratamos de recabar los datos
                      en formatos independientes, requiriendo autorización
                      expresa para su tratamiento exclusivo, salvo que sea
                      imposible.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      3. Finalidad del Tratamiento de Datos:
                    </h4>
                    <p className="text-gray-700 ml-4 mb-4">
                      Sus datos personales podrán ser utilizados, entre otras,
                      para las siguientes finalidades relacionadas con la
                      relación jurídica y/o la prestación de servicios:
                    </p>

                    <h5 className="font-bold text-gray-900 mb-4 text-center ml-4">
                      Finalidades necesarias
                    </h5>

                    <p className="text-gray-700 ml-4 mb-4">
                      BETALEASING, le informa que los datos que posee, recaba o
                      recabará de usted, los utilizamos o utilizaremos para las
                      siguientes finalidades que son necesarias para la
                      contratación del producto y/o el servicio que solicita:
                    </p>

                    <h5 className="font-bold text-gray-900 mb-4 ml-4">
                      Cuando Usted:
                    </h5>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h6 className="font-bold text-gray-900 mb-2">
                          Visita nuestras instalaciones:
                        </h6>
                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                          <li>
                            Para controlar el acceso y mantener la seguridad en
                            nuestras instalaciones.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="font-bold text-gray-900 mb-2">
                          Se pone en contacto con nosotros:
                        </h6>
                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                          <li>
                            Para responder dudas, consultas y comentarios.
                          </li>
                          <li>
                            Gestión de contratación del servicio, alta cliente,
                            formación del expediente administrativo y
                            expedientes relativos servicio que se solicita.
                          </li>
                          <li>Establecer una relación jurídica.</li>
                          <li>
                            Verificar y confirmar su identidad, así como la
                            autenticidad de la información que nos proporciona,
                            incluyendo la de sus terceros autorizados, cónyuges,
                            beneficiarios, referencias, garantes, obligados
                            solidarios, avales o fiadores, vendedores, cónyuge
                            del vendedor según resulte aplicable.
                          </li>
                          <li>
                            Integrar expedientes y bases de datos necesarias
                            para el otorgamiento y operación de los
                            arrendamientos, compra venta y servicios que se
                            contraten, así como las obligaciones que se deriven
                            de los mismos.
                          </li>
                          <li>
                            Transmisión de información a nuestros proveedores y
                            colaboradores para la adquisición de bienes que
                            Usted solicita en arrendamiento, así como a diversas
                            entidades integrantes del Sistema Financiero
                            Mexicano y cualquier otro sujeto obligado a detectar
                            operaciones financieras relevantes, políticamente
                            expuestas, y cualquier otra, conforme a la
                            normatividad aplicable para la prevención y combate
                            de operaciones con recursos de procedencia ilícita.
                          </li>
                          <li>
                            La adecuada integración de expedientes, solicitudes,
                            órdenes de compra y demás procesos necesarios para
                            la correcta comercialización de productos y
                            servicios.
                          </li>
                          <li>
                            Para diseñar productos de financiamiento y/o
                            arrendamiento y/o adquisición de bienes,
                            específicamente de acuerdo a los requerimientos.
                          </li>
                          <li>
                            Para otorgar y/o validar y/o reclamar servicios de
                            asistencia y servicios complementarios que se puedan
                            establecer en beneficio del titular.
                          </li>
                          <li>
                            Otorgamiento del producto o servicio solicitado a
                            través de socios comerciales.
                          </li>
                          <li>
                            Atender requerimientos legales solicitados por
                            autoridades competentes.
                          </li>
                          <li>
                            Notificar cambios en condiciones y mantener la
                            relación comercial.
                          </li>
                          <li>
                            Actividades complementarias necesarias para la
                            realización de las finalidades antes mencionadas.
                          </li>
                          <li>
                            Realizar la facturación de los arrendamientos,
                            compraventas, y servicios que se presten al titular
                            de los datos.
                          </li>
                          <li>
                            Realizar actividades de cobranza derivadas del
                            incumplimiento de la obligación contractual por los
                            servicios o productos contratados, incluyendo
                            visitas o llamadas telefónicas de gestión de
                            cobranza en su caso.
                          </li>
                          <li>
                            Para mantener comunicación con autoridades e
                            informar sobre actividades, trámites y servicios de
                            BETALEASING.
                          </li>
                          <li>Para fines estadísticos.</li>
                          <li>
                            Realización de llamadas telefónicas para
                            actualización de datos y renovaciones para la
                            administración y seguimiento de nuestros activos,
                            productos y servicios.
                          </li>
                          <li>
                            Seguimiento a demandas entre BETALEASING y clientes,
                            denuncias por involucramiento en actos ilícitos,
                            accidentes o donde la ley fundamente intercambio de
                            información del cliente con entidades
                            gubernamentales (ministerio público, etc.)
                          </li>
                          <li>
                            Hacer consultas, investigaciones y revisiones en
                            relación a sus quejas o reclamaciones.
                          </li>
                          <li>
                            Datos de contacto en su calidad de representante de
                            nuestro cliente, para el seguimiento y monitoreo de
                            los derechos y obligaciones derivados de nuestro
                            contrato de servicios.
                          </li>
                          <li>
                            Datos necesarios para la entrega de nuestros
                            productos, facturas y notificaciones relacionadas
                            con nuestra relación con el cliente.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="font-bold text-gray-900 mb-2">
                          Cuando decide enviar su currículo vitae:
                        </h6>
                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                          <li>
                            Para establecer contacto con usted y considerarlo
                            para un proceso de reclutamiento y selección.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="font-bold text-gray-900 mb-2">
                          Cuando se registra como usuario:
                        </h6>
                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                          <li>
                            Permitirle el acceso a su perfil y a las
                            características del sitio desarrolladas
                            exclusivamente para usuarios.
                          </li>
                          <li>
                            Personalizar las funciones de su cuenta de usuario.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-6">
                      Sus datos personales podrían utilizarse para finalidades
                      que sean compatibles con las descritas y puedan
                      considerarse análogas.
                    </p>

                    <h5 className="font-bold text-gray-900 mb-4 text-center mt-8">
                      Finalidades secundarias
                    </h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      De manera adicional, utilizaremos sus datos personales
                      para las siguientes finalidades secundarias que no son
                      necesarias para el servicio solicitado, pero que nos
                      permiten y facilitan brindarle una mejor atención:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                      <li>
                        Mercadotecnia, publicidad, prospección comercial y
                        elaboración de perfiles de clientes para el desarrollo y
                        ofrecimiento de nuevos productos, realización de
                        encuestas, creación o implementación de procesos
                        analíticos y estadísticos, relacionados con las
                        operaciones y servicios señalados, relacionadas con los
                        fines necesarios señalados de BETALEASING.
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Asimismo, el tratamiento de datos personales será el que
                      resulte necesario, adecuado y relevante en relación con
                      las finalidades previstas en éste aviso de privacidad y
                      los fines distintos que resulten compatibles o
                      complementarios relacionados con los servicios que
                      proporciona BETALEASING.{" "}
                      <strong>
                        La negativa para el uso de sus datos personales para
                        estas finalidades secundarias no será motivo para que le
                        neguemos los servicios y/o productos que solicita o
                        contrata con nosotros.
                      </strong>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      4. Medidas de seguridad y confidencialidad de la
                      información:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      BETALEASING se compromete a implementar las medidas de
                      seguridad físicas, administrativas y técnicas necesarias
                      para proteger su información personal contra daño,
                      pérdida, alteración, destrucción o el uso, acceso o
                      tratamiento no autorizado. Asimismo, BETALEASING y todos
                      sus empleados, encargados y en general, usuarios que
                      tengan acceso a datos personales en el ejercicio de sus
                      funciones o intervengan en cualquier fase del tratamiento
                      se comprometen a guardar confidencialidad respecto de su
                      información personal, incluso después de finalizada la
                      relación con usted o con BETALEASING.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      5. Transmisión y transferencia de datos:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Le garantizamos que todos los contratos de prestación de
                      servicios con terceros que impliquen el tratamiento de su
                      información personal a nombre y por cuenta de BETALEASING
                      incluirán una cláusula garantizando que los mismos otorgan
                      el nivel de protección de datos personales previsto por la
                      LFPDPPP y demás normativa aplicable. En cualquier caso,
                      todo acceso se realizará dando cumplimiento a la LFPDPPP y
                      demás normatividad aplicable.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Le informamos que sus datos personales podrán ser
                      transferidos a terceros dentro y fuera del país cuando:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                      <li>
                        a) La transferencia esté prevista en una ley o tratado
                        en los que México sea parte.
                      </li>
                      <li>
                        b) Sea necesaria para la prevención o diagnóstico
                        médico, la prestación de asistencia sanitaria,
                        tratamiento médico o gestión de servicios sanitarios.
                      </li>
                      <li>
                        c) Sea efectuada a sociedades controladoras,
                        subsidiarias o afiliadas bajo el control común del
                        Responsable de que se trate, o a una sociedad matriz o
                        cualquier sociedad del mismo grupo del Responsable que
                        opere bajo los mismos procesos y políticas internas.
                      </li>
                      <li>
                        d) Sea necesaria por virtud de un contrato celebrado o
                        por celebrar en interés del titular, por el Responsable
                        y un tercero.
                      </li>
                      <li>
                        e) Sea necesaria para el mantenimiento o cumplimiento de
                        una relación jurídica entre el Responsable y el titular.
                      </li>
                      <li>
                        f) Sea legalmente exigida para la salvaguarda de un
                        interés público, o para la procuración o administración
                        de justicia.
                      </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Asimismo, podrán realizarse transferencias a terceros,
                      como el Instituto Nacional Electoral (INE), a efecto de
                      validar su identidad en términos de lo establecido en la
                      normatividad aplicable para combatir el robo de identidad.
                      Eventualmente, sus datos personales serán compartidos con
                      las partes relacionadas de BETALEASING, o con empresas,
                      inversionistas (personas físicas o morales) o demás
                      instituciones de crédito para la venta de cartera o
                      consultas con las Sociedades de Información Crediticia,
                      como se indica en el presente aviso de privacidad dentro o
                      incluso fuera de la República Mexicana. En todo caso,
                      comunicaremos el presente aviso de privacidad a los
                      destinatarios de sus datos personales para que se respeten
                      sus términos.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      BETALEASING se compromete a que se cumplan todos los
                      principios legales de protección respecto de la
                      transmisión y transferencia de sus datos personales.
                      Asimismo, manifiesta su compromiso de que se respete el
                      presente aviso de privacidad en todo momento, por nosotros
                      y por nuestros socios, asociados y proveedores. La
                      información en posesión de BETALEASING no será tratada por
                      un tiempo mayor al necesario para el cumplimiento de las
                      finalidades señaladas.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      6. Ejercicio de derechos ARCO:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Con apego a lo previsto por la LFPDPPP, Usted o si lo
                      tuviere, su representante legal debidamente acreditado,
                      podrá ejercer sus derechos de acceso, rectificación,
                      cancelación y oposición al tratamiento de sus datos
                      personales, poniéndose en contacto con el Encargado
                      (Comité) de Privacidad de Datos. Sus derechos consisten en
                      lo siguiente:
                    </p>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          I) Acceso.-
                        </h5>
                        <p className="text-gray-700">
                          Implica poder conocer en todo momento sus datos
                          personales en posesión de BETALEASING, así como
                          conocer el Aviso de Privacidad correspondiente.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          II) Rectificación.-
                        </h5>
                        <p className="text-gray-700">
                          Si alguno de sus datos es inexacto o incompleto, podrá
                          solicitar su modificación, adjuntando la documentación
                          que acredite dicha corrección.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          III) Cancelación.-
                        </h5>
                        <p className="text-gray-700">
                          Usted podrá requerir cuando así lo considere la
                          cancelación de sus datos; en caso de la misma sea
                          procedente, su información personal entrará en un
                          período de bloqueo para proceder posteriormente a su
                          eliminación. Al entrar a dicho periodo, su información
                          ya no podrá ser tratada por BETALEASING.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          IV) Oposición.-
                        </h5>
                        <p className="text-gray-700">
                          Usted podrá en todo momento y por causa legítima
                          objetar el tratamiento de sus datos personales. Si su
                          solicitud resulta procedente, BETALEASING ya no podrá
                          tratar los mismos.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-6">
                      Para facilitar el ejercicio de estos derechos, pondremos a
                      su disposición las solicitudes y modelos que podrá obtener
                      en la siguiente dirección electrónica:
                      www.betaleasing.com./Privacidad/ARCO, o personalmente ante
                      el Encargado de Privacidad de Datos (Comité), con horario
                      de atención en: Isaac Newton No. 186 interior 401, Colonia
                      Polanco, Delegación Miguel Hidalgo, México, C.P. 11560,
                      Ciudad de México. Teléfono: (+52) (55) 8663-0720 Correo
                      electrónico: dbetanzo@betaleasing.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      7. Limitación de Uso:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Usted podrá revocar su consentimiento o instruir a
                      BETALEASING para que limite el uso o divulgación de sus
                      datos personales, mediante aviso por escrito debidamente
                      firmado y reconocido, en el que manifieste las razones de
                      la revocación o limitaciones que desee establecer, lo cual
                      será aplicado dentro de los treinta días inmediatos
                      siguientes a su recepción; siempre que no contravengan
                      alguna Ley o impliquen una variación a la relación
                      jurídica que le vincula con BETALEASING. Los formatos para
                      estos efectos estarán disponibles en la dirección
                      electrónica: www.betaleasing.com./Privacidad/ARCO, o
                      personalmente ante el Encargado (Comité) de Privacidad de
                      Datos, con oficina de atención en la dirección indicada en
                      el punto 6 anterior.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      8. Cambios al Aviso de Privacidad:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Es posible que modifiquemos el presente aviso de
                      privacidad. BETALEASING podrá modificar el presente aviso
                      y sus prácticas en torno al manejo de su información
                      personal. Cualquier modificación sustancial que le afecte,
                      le será notificada a través del sitio web y/o la dirección
                      de correo electrónico que usted nos haya proporcionado.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El procedimiento aplicable a las modificaciones de las
                      condiciones de Privacidad, iniciará con la notificación
                      que BETALEASING le hará, mediante publicación del aviso en
                      el sitio web y/o correo electrónico a la dirección de
                      correo electrónico que usted nos haya proporcionado, con
                      quince días naturales de anticipación a la entrada en
                      vigor de la modificación. En el evento que Usted no esté
                      de acuerdo con las modificaciones propuestas, podrá
                      solicitar a BETALEASING, dentro de los diez días
                      inmediatos siguientes a la notificación, la limitación de
                      uso o divulgación de los datos personales en los nuevos
                      términos y condiciones, o bien, ejercitar cualquiera de
                      los derechos ARCO en los términos del punto 6 anterior.
                      Una vez transcurrido el plazo establecido sin que
                      BETALEASING haya recibido comunicación alguna de su parte,
                      se tendrá por expresado su consentimiento con el nuevo
                      Aviso de Privacidad.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      9. Comité de Privacidad de Datos:
                    </h4>
                    <p className="text-gray-700  mb-4">
                      El Encargado (Comité) de Privacidad de Datos le
                      proporcionará la atención necesaria para el ejercicio de
                      sus derechos ARCO y además, velará por la protección de
                      sus datos personales al interior de la organización.
                    </p>

                    <p className="text-gray-700 font-semibold mb-2">
                      Encargado: DIEGO RAÚL BETANZO ZAYAS
                    </p>
                    <p className="text-gray-700 mb-1">
                      Domicilio: Isaac Newton No. 186 interior 401, Colonia
                      Polanco, Delegación Miguel Hidalgo, México, C.P. 11560,
                      Ciudad de México
                    </p>
                    <p className="text-gray-700 mb-1">
                      Teléfono: (+52) (55) 8663-0720
                    </p>
                    <p className="text-gray-700 mb-1">
                      Correo electrónico: dbetanzo@betaleasing.com
                    </p>
                    <p className="text-gray-700">
                      Horario de atención: de las 8:00 a las 14:00 horas, de
                      lunes a viernes conforme al calendario bancario.
                    </p>
                  </div>

                  <div className="mt-8 p-4 rounded-lg">
                    <p className="text-gray-700 text-center">
                      La puesta a disposición del presente documento sin
                      expresión de oposición, se entiende como consentimiento
                      tácito. Publicado en México, Ciudad de México, a 1 de
                      agosto de 2018.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} BetaLeasing. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
