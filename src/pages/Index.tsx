import React from "react";
import { getMockNews } from "@/services/mockNews";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideGlobe, LucideDatabase, LucideCode, LucideTestTube, LucideGitBranch, LucideTerminal, LucideShieldAlert, LucideCloud } from "lucide-react";

const Index = () => {
  const news = getMockNews();

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#000000",
      color: "#ffffff"
    }}>
      {/* Email Header */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ padding: "20px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <img 
              src="https://your-domain.com/lovable-uploads/079be5a7-51c4-4d5e-acef-88fbda687593.png" 
              alt="Sysarmy Logo" 
              style={{ height: "64px", marginBottom: "16px" }}
            />
            <h1 style={{ 
              fontSize: "24px", 
              fontWeight: "bold", 
              marginBottom: "8px",
              color: "#ffffff"
            }}>
              Firmware Friday
            </h1>
            <p style={{ color: "#9CA3AF", fontFamily: "monospace" }}>
              ¿Listos para el update?<br />
              Actualizá tu stack en menos de 30''
            </p>
          </td>
        </tr>
      </table>

      {/* News Grid */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ padding: "24px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              {/* Infrastructure News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginBottom: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      Infrastructure
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    {news.infrastructure.title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    {news.infrastructure.description}
                  </p>
                </td>
              </tr>

              {/* AI News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginTop: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      AI
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    {news.ai.title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    {news.ai.description}
                  </p>
                </td>
              </tr>

              {/* Testing News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginTop: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      Testing
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    Testing Frameworks
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    Popular testing frameworks comparison for 2024.
                  </p>
                </td>
              </tr>

              {/* DevOps News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginTop: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      DevOps
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    {news.devops.title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    {news.devops.description}
                  </p>
                </td>
              </tr>

              {/* Security News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginTop: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      Security
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    {news.security.title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    {news.security.description}
                  </p>
                </td>
              </tr>

              {/* Cloud News */}
              <tr>
                <td style={{ 
                  padding: "16px", 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  borderRadius: "8px",
                  marginTop: "24px",
                  display: "block"
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ 
                      backgroundColor: "rgba(255,255,255,0.1)", 
                      color: "#ffffff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px"
                    }}>
                      Cloud
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}>
                    {news.cloud.title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                  }}>
                    {news.cloud.description}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Comic Section */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ 
            padding: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)"
          }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <span style={{ 
                backgroundColor: "rgba(255,255,255,0.1)", 
                color: "#ffffff",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "14px"
              }}>
                Comic del Día
              </span>
            </div>
            <div style={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              padding: "16px"
            }}>
              <img 
                src="/images/Jan-24-Not-if-but-when.png" 
                alt="Comic del Día - Work Chronicles" 
                style={{ 
                  maxWidth: "100%",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "block"
                }}
              />
              <p style={{ 
                textAlign: "center",
                fontSize: "14px",
                color: "#9CA3AF",
                marginTop: "16px",
                fontFamily: "monospace"
              }}>
                Fuente: <a href="https://workchronicles.substack.com" style={{ color: "#60A5FA" }}>Work Chronicles</a>
              </p>
            </div>
          </td>
        </tr>
      </table>

      {/* Banner */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ padding: "24px", backgroundColor: "#8B5CF6", textAlign: "center" }}>
            <h2 style={{ 
              fontSize: "20px", 
              fontWeight: "bold", 
              marginBottom: "16px",
              color: "#ffffff"
            }}>
              ¿Querés más contenido tecnológico?
            </h2>
            <p style={{ 
              fontSize: "14px",
              color: "#ffffff",
              marginBottom: "24px"
            }}>
              Seguinos en nuestras redes sociales para estar al día con las últimas novedades
            </p>
            <button style={{ 
              backgroundColor: "#ffffff",
              color: "#8B5CF6",
              padding: "12px 24px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease"
            }}>
              Seguir a Sysarmy
            </button>
          </td>
        </tr>
      </table>

      {/* Footer */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ 
              fontSize: "14px",
              color: "#9CA3AF",
              fontFamily: "monospace"
            }}>
              You received this email because you subscribed to Sysarmy's tech updates.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Index;
